import User from "../../models/users.model.js";
import Task from "../../models/tasks.model.js";
import Category from "../../models/categories.model.js";

const createUser = async (req, res) => {
  try {
    const { body } = req;
    const users = await User.create(body);
    res.status(201).json(users);
  } catch (error) {
    res.status(400).json(error);
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;
    await User.update(body, {
      where: { id },
    });
    res.status(204).end();
  } catch (error) {
    res.status(400).json(error);
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: ["id", "username", "email"],
      include: [
        {
          model: Task,
          attributes: ["id", "title", "description", "completed"],
          include: { model: Category, through: { attributes: [] } },
        },
      ],
    });
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await User.destroy({
      where: { id },
    });
    res.status(204).end();
  } catch (error) {
    res.status(400).json(error);
  }
};

export { createUser, updateUser, getAllUsers, deleteUser };
