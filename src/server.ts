import mongoose from "mongoose";
import app from "./app";
import config from "./app/config/index";

async function server() {
  try {
    if (!config.database_url) {
      throw new Error("DATABASE_URL is not defined");
    }
    await mongoose.connect(config.database_url);

    console.log("Database is connected");

    app.listen(config.port, () => {
      console.log(`Server is running http://localhost:${config.port}`);
    });
  } catch (error) {
    console.error("Server error:", error);
  }
}

server();
