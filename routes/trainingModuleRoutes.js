const express = require('express');
const router = express.Router();
const {
  createTrainingModule,
  getAllTrainingModules,
  getTrainingModuleById,
  updateTrainingModule,
  deleteTrainingModule,
} = require('../resolvers/trainingModuleResolvers');

// GET all TrainingModules
router.get('/', getAllTrainingModules);

// Get a single TrainingModule by ID
router.get('/:id', getTrainingModuleById);

// POST create a new TrainingModule
router.post('/', createTrainingModule);

// PUT update a TrainingModule
router.put('/:id', updateTrainingModule);

// DELETE delete a TrainingModule
router.delete('/:id', deleteTrainingModule);

module.exports = router;
