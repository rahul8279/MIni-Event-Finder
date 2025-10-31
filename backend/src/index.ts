import dotenv from "dotenv";
dotenv.config({});
import app from "./app.ts";

const PORT = process.env.PORT || 8000;


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
