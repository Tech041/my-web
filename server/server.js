import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import messageRouter from "./routes/message.route.js";
import adminRouter from "./routes/admin.route.js";

const app = express();
// Midleware
app.use(cors());
app.use(express.json());
// DB
connectDB();
// port
const port = process.env.PORT;
// Routes
app.use("/api/message", messageRouter);
app.use("/api/admin", adminRouter);

app.use("/", (req, res) => {
  res.send("API IS WORKING");
});
app.listen(port, () => {
  console.log("App running on", port);
});
