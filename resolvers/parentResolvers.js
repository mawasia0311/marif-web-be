// resolvers/parentResolver.js

const { Parent, Student } = require('../models');

// Create a new parent
const createParent = async (req, res) => {
  try {
    const newParent = await Parent.create(req.body);
    res.status(201).json(newParent);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all parents
const getAllParents = async (req, res) => {
  try {
    const parents = await Parent.findAll({
      include: {
        model: Student,
      }
    });
    res.json(parents);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get a single parent by ID
const getParentById = async (req, res) => {
  const { id } = req.params;
  try {
    const parent = await Parent.findByPk(id, {
      include: {
        model: Student,
      }
    });
    if (!parent) throw new Error('Parent not found');
    res.json(parent);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

// Update a parent by ID
const updateParent = async (req, res) => {
  const { id } = req.params;
  try {
    const [updated] = await Parent.update(req.body, {
      where: { id },
    });
    if (updated) {
      const updatedParent = await Parent.findByPk(id);
      res.json(updatedParent);
    } else {
      throw new Error('Parent not found');
    }
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

// Delete a parent by ID
const deleteParent = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Parent.destroy({
      where: { id },
    });
    if (deleted) {
      res.status(204).send();
    } else {
      throw new Error('Parent not found');
    }
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = {
  createParent,
  getAllParents,
  getParentById,
  updateParent,
  deleteParent,
};
