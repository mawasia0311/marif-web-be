const express = require('express');
const router = express.Router();
const {
  createOption,
  getAllOptions,
  getOptionById,
  updateOption,
  deleteOption,
} = require('../resolvers/optionResolvers');

// GET all Options
router.get('/', getAllOptions);

// Get a single Option by ID
router.get('/:id', getOptionById);

// POST create a new Option
router.post('/', createOption);

// PUT update an Option
router.put('/:id', updateOption);

// DELETE delete an Option
router.delete('/:id', deleteOption);

module.exports = router;
