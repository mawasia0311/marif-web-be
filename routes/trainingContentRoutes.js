const express = require('express');
const router = express.Router();
const {
  createTrainingContent,
  getAllTrainingContents,
  getTrainingContentById,
  updateTrainingContent,
  deleteTrainingContent,
} = require('../resolvers/trainingContentResolvers');

// GET all TrainingContents
router.get('/', getAllTrainingContents);

// Get a single TrainingContent by ID
router.get('/:id', getTrainingContentById);

// POST create a new TrainingContent
router.post('/', createTrainingContent);

// PUT update a TrainingContent
router.put('/:id', updateTrainingContent);

// DELETE delete a TrainingContent
router.delete('/:id', deleteTrainingContent);

module.exports = router;
