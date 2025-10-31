import dotenv from "dotenv";
dotenv.config({});
import app from "./app.ts";
import errorMiddleware from "./middleware/globalError.middleware.ts";
import connectDB from "./config/db.ts";

const PORT = process.env.PORT || 8000;


app.use(errorMiddleware);
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to the database:", error);
  });
