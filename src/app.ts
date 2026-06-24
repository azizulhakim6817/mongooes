import cors from "cors";
import express from "express";
import ratLimit from "express-rate-limit";
import helmet from "helmet";
import hpp from "hpp";
import mongoose from "mongoose";
import config from "./app/config";
import router from "./routes";

const app = express();

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:8000",
  }),
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(helmet());
app.use(hpp());

async function server() {
  try {
    await mongoose.connect(config.database_url as string);
    //console.log("DATABASE_URL:", config.database_url);
    console.log("Database is connected");
  } catch (error) {
    console.error("Server error:", error);
  }
}

server();

app.use(router);

const limiter = ratLimit({ windowMs: 15 * 60 * 1000, max: 100 });
app.use(limiter);

export default app;
