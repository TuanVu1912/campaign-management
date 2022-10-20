const express = require("express");
const bodyParser = require("body-parser");
// TODO a middleware will have to repack it..
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const compression = require("compression");

// TODO it won't start for some reason const rateLimiter = require("express-rate-limit");
const hpp = require("hpp");

const globalErrorHandler = require("./middlewares/errorMiddleware");

const app = express();
const AppError = require("./utils/appError");

// MIDDLEWARES

var cors = require('cors')

 
app.use(cors())
 app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})

// Security
app.use(helmet());
//TODO app.use("/api", limiter);
app.use(xss());
app.use(mongoSanitize());
app.use(
  hpp({
    whitelist: [], // properties which are allowed to be duplicated in the parameter
  })
);
app.use(compression());

// Requests
app.use(express.json({ limit: "10kb" }));
app.use(express.static(`${__dirname}/public`));

app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());

// ROUTES
require("./routes/index")(app);

// app.all("*", (req, res, next) => {
//   next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
// });

app.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  let status = err.status || 500
  let message = err.message || err
  err.message === "User password don't match" ? (status = 401) : status
  console.error('ERROR IN INDEX', err)
  res.status(status).send(message)
})
app.use(globalErrorHandler);
module.exports = app;
