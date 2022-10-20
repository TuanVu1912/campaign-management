const mongoose = require("mongoose");
const app = require("./app");
// const limiter = rateLimiter({
//   max: 100,
//   windowsMs: 60 * 60 * 1000,
//   message: "Too many requests from this IP, please try again later",
// });
require('dotenv').config()
const { URI } = process.env
mongoose
    .connect(URI)
    .then(() => console.log('DBconnection Successfull'))
    .catch((err) => {
        console.log('DB connection error', err)
    });

app.listen(process.env.SERVER_PORT||5000, () => {
  console.log(`App running on port ${process.env.SERVER_PORT}...`);
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION! 💥 Shutting down...");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
