import Category from "../../models/categories.model.js";

const createCategory = async (req, res) => {
  try {
    const { body } = req;
    const categories = await Category.create(body);
    res.status(201).json(categories);
  } catch (error) {
    res.status(400).json(error);
  }
};

const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.status(200).json(categories);
  } catch (error) {
    res.status(400).json(error);
  }
};

const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;
    await Category.update(body, {
      where: { id },
    });
    res.status(204).end();
  } catch (error) {
    res.status(400).json(error);
  }
};

const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    await Category.destroy({
      where: { id },
    });
    res.status(204).end();
  } catch (error) {
    res.status(400).json(error);
  }
};

export { createCategory, getAllCategories, updateCategory, deleteCategory };
