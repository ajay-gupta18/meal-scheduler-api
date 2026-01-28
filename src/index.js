import "dotenv/config";
import express from "express";
import cors from "cors";
import { config } from "./config/index.js";
import authRouter from "./modules/auth/auth.router.js";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/v1/auth", authRouter);

app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});
