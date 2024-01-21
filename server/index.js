import express from "express";
import connectDB from "./utils/db_connection.js";
import Routes from "./routes/route.js";
import cors from "cors";
import bodyParser from "body-parser";
const app = express();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/", Routes);

const PORT = 8000;

connectDB();
app.listen(PORT, () =>
  console.log(`server is running successfully on PORT ${PORT}`)
);
