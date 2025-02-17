const express = require('express');
const router = express.Router();
const {
  createParent,
  getAllParents,
  updateParent,
  deleteParent,
  getParentById
} = require('../resolvers/parentResolvers');

// GET all parents
router.get('/', getAllParents);

// GET parents by PK
router.get('/:id', getParentById);

// POST create a new parent
router.post('/', createParent);

// PUT update a parent
router.put('/:id', updateParent);

// DELETE delete a parent
router.delete('/:id',deleteParent);

module.exports = router;
