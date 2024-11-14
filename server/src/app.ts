import express from "express";
import tasksRoutes from "./routes/tasks";
import cors from "cors";
import envs from "./core/config/env";

const app = express();

app.use(express.json());

app.use(cors({ origin: envs.CLIENT_URL}));

app.use("/api/v1/tasks", tasksRoutes);

export default app;
