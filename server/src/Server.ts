/**
 * Installed Library imports
 * @express this is base library which is mandatory for creating express js structure
 * @http this library is used to create server
 * @mongoose This library is used to manupulate datbase
 * @cors This library is responsible for preventing un-authorize exectuion/access of the API's.
 *  */
import express from "express";
import http from "http";
import mongoose from "mongoose";
import cors from "cors";

/**
 * Custom module imports.
 * @config env file configuration module
 * @Logging Log library module
 */
import { config } from "./config/config";
import Logging from "./middleware/Logging";
import { routerV1 } from "./routes/Index";

// Router object
const app = express();

// Course configuration
var corsOptions = {
  origin: "http://localhost:9090",
};
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

/** Connect to Mongo
 * This method check connection with database. If connection established then server method executed
 */
mongoose
  .connect(config.mongo.url)
  .then(() => {
    Logging.info("MongoDB Connected.");
    // Server Method
    StartServer();
  })
  .catch((error) => {
    Logging.info(config.mongo.url)
    Logging.error("Unable to connect.");
    Logging.error(error);
  });

/** Only Start the server if Mongo Connects */
const StartServer = () => {
  app.use((req, res, next) => {
    /** Log the reqeust */
    Logging.info(
      `Incomming - METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`
    );

    res.on("finish", () => {
      /** Log the res */
      if (res.statusCode == 200 || res.statusCode == 201) {
        Logging.info(
          `Result - METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}] - STATUS: [${res.statusCode}]`
        );
      } else {
        Logging.error(
          `Result - METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}] - STATUS: [${res.statusCode}]`
        );
      }
    });

    next();
  });

  //** Health check */
  app.use("/ping", (req, res, next) =>
    res.status(200).json({ message: "Working" })
  );

  //** Routes */
  app.use("/api/v1", routerV1);

  http
    .createServer(app)
    .listen(config.server.port, () =>
      Logging.info(`Server is running on Port ${config.server.port}.`)
    );
};