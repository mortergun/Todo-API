import User from "./users.model.js";
import Task from "./tasks.model.js";
import Category from "./categories.model.js";
import TaskCategories from "./taskcategoties.model.js";

const initModels = () => {
  User.hasMany(Task, { foreignKey: "userId" });
  Task.belongsTo(User, { foreignKey: "userId" });

  Task.belongsToMany(Category, { through: TaskCategories });
  Category.belongsToMany(Task, { through: TaskCategories });
};

export default initModels;