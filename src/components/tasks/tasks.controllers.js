import Category from "../../models/categories.model.js";
import Task from "../../models/tasks.model.js";

const createTask = async (req, res) => {
  try {
    const { categoryId, ...task } = req.body;
    const [newTask, created] = await Task.findOrCreate({
      where: { title: task.title },
      defaults: task,
    });
    const taskCategory = await Category.findOne({
      where: { id: categoryId },
    });
    if (!taskCategory && created) {
      await Task.destroy({ where: { id: newTask.id } });
      return res.status(400).json({ error: "no se encuentra la categoria" });
    }
    await newTask.addCategory(taskCategory);
    res.status(201).end();
  } catch (error) {
    res.status(400).json(error);
    console.log(error);
  }
};

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll({
      attributes: ["id", "title", "description", "completed"],
      include: { model: Category, through: { attributes: [] } },
    });
    res.status(200).json(tasks);
  } catch (error) {
    res.status(400).json(error);
  }
};

const getTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    const tasks = await Task.findOne({
      where: { id },
      attributes: ["id", "title", "description", "completed"],
      include: [{ model: Category, through: { attributes: [] } }],
    });
    res.status(200).json(tasks);
  } catch (error) {
    res.status(400).json(error);
  }
};

const updateStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { completed } = req.body;
    await Task.update(
      {
        completed,
      },
      {
        where: { id },
      }
    );
    res.status(201).json({ message: "Status actualizado correctamente." });
  } catch (error) {
    res.status(400).json(error);
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    await Task.destroy({
      where: { id },
    });
    res.status(204).end();
  } catch (error) {
    res.status(400).json(error);
  }
};

export { createTask, getAllTasks, getTaskById, updateStatus, deleteTask };
