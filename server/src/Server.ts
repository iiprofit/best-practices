/**
 * Installed Library imports
 * @express this is base library which is mandatory for creating express js structure
 * @http this library is used to create server
 *  */
import express from "express";
import http from "http";

/**
 * Custom module imports.
 * @config env file configuration module
 * @Logging Log library module
 */
import { config } from "./config/config";
import Logging from "./middleware/Logging";

// Router object
const router = express();

http
  .createServer(router)
  .listen(config.server.port, () =>
    Logging.log(`Server is running on Port ${config.server.port}.`)
  );
