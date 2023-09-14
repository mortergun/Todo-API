import { Router } from "express";
import { createTask, deleteTask, getAllTasks, getTaskById, updateStatus } from "./tasks.controllers.js";

const router = Router();

router.route("/task").post(createTask).get(getAllTasks);

router.route('/task/:id').get(getTaskById).put(updateStatus).delete(deleteTask);

export default router;
