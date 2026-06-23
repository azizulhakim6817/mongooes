import mongoose from "mongoose";
import app from "./app.js";
import config from "./app/config/index.js";

async function server() {
  try {
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
