import { Router } from "express";
import { createCategory, deleteCategory, getAllCategories, updateCategory } from "./categories.controllers.js";

const router = Router();

router.route("/categories").post(createCategory).get(getAllCategories);

router.route("/categories/:id").put(updateCategory).delete(deleteCategory);

export default router;
