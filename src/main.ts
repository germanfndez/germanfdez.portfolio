import app from "./server/index.js";
import mongoose from "mongoose";

const startServer = (): void => {
  console.log("starting server");
  app.listen(app.get("server_port"), () => {
    console.log(
      `started server ${app.get("server_url")}:${app.get("server_port")}`
    );
  });
};

const startDatabase = async () => {
  console.log("connecting db");
  await mongoose.connect(app.get("db_url"));
  console.log("connected db");
};

const startEvents = () => {
  app.on("close", () => {
    mongoose.connection.close();
    startMain();
  });
};

const startMain = async () => {
  try {
    await startDatabase();
    startServer();

    setTimeout(() => {
      console.log("--Press Ctrl + C to CLOSE--");
    }, 1000);

    startEvents();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
startMain();
