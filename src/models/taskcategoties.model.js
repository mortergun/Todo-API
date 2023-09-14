import { DataTypes } from "sequelize";
import db from "../utils/database.js";

const TaskCategories = db.define("TaskCategories", {}, { timestamps: false });

export default TaskCategories;