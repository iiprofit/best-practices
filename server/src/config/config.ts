/**
 * NOTE :
 * THIS PAGE CONTAIN ALL THE CODE RELATED TO DATABASE CONNECTION.
 */

// Import dotenv library so we can access env file information.
import dotenv from "dotenv";

dotenv.config();

// Store sensitive information from env file to this file which we can use in project.
const MONGO_USERNAME = process.env.MONGO_USERNAME || "";
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || "";
const MONGO_DB = process.env.DB_Name || "";
const MONGO_URL = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@localhost:27017/?authMechanism=DEFAULT&authSource=${MONGO_DB}`;
const SERVER_PORT = process.env.SERVER_PORT
  ? Number(process.env.SERVER_PORT)
  : 1337;

// Export only neccessary information which will be used in project
export const config = {
  mongo: {
    url: MONGO_URL,
  },
  server: {
    port: SERVER_PORT,
  },
};
