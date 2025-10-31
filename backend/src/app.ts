import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import eventRoutes from "./route/event.route.ts";
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
app.use("/api/v1/event", eventRoutes);
export default app;
