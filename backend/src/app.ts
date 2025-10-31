import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

export default app;
