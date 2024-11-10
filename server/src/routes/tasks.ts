import { Router } from "express";
import {
  getAlltasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
} from "../controllers/tasks";

const routes = Router();

routes.route("/").get(getAlltasks).post(createTask);

routes.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

export default routes;
