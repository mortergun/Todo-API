import { Router } from "express";
import {
  createUser,
  deleteUser,
  getAllUsers,
  updateUser,
} from "./users.controllers.js";

const router = Router();

router.route("/user").post(createUser).get(getAllUsers);

router.route("/user/:id").put(updateUser).delete(deleteUser);

export default router;
