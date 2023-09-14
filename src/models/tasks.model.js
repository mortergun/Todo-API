import { DataTypes } from "sequelize";
import db from "../utils/database.js";

const Task = db.define(
  "tasks",
  {
    title: {
      type: DataTypes.STRING(60),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(120),
      allowNull: true,
    },
    completed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "user_id"
    }
  },
  {
    timestamps: false,
  }
);

export default Task;
