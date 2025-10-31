import type { NextFunction, Request, Response } from "express";
import type ApiError from "../utils/apiError.ts";
import ApiResponse from "../utils/apiResponse.ts";

const errorMiddleware = (
  err: ApiError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(`[${req.method}] ${req.url} -> ${err.message}`);
  const statusCode = err.statusCode || 500;
  const message = err.message || "internal sever error.";
  res
    .status(statusCode)
    .json(new ApiResponse(statusCode, message, err.details));
};

export default errorMiddleware;
