import { Application } from "express";

import dotenv from "dotenv";
dotenv.config();

const startConfig = (app: Application): void => {
  app.set("server_url", process.env.SERVER_URL || "http://localhost");
  app.set("server_port", process.env.SERVER_PORT || 3000);

  app.set("db_url", process.env.DATABASE_URL || "mongodb://localhost:27017/");
};
export default startConfig;
