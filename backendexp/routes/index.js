// ROUTES IMPORT
const userRouter = require("./userRoutes");
const stockRouter = require("./stockRoutes");

module.exports = function (app) {
  app.use("/api/v1", userRouter);
  app.use("/api/v1/stocks", stockRouter);
};
