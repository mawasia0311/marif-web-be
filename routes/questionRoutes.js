const express = require('express');
const router = express.Router();
const {
  createQuestion,
  getAllQuestions,
  getQuestionById,
  updateQuestion,
  deleteQuestion,
} = require('../resolvers/questionResolvers');

// GET all Questions
router.get('/', getAllQuestions);

// Get a single Question by ID
router.get('/:id', getQuestionById);

// POST create a new Question
router.post('/', createQuestion);

// PUT update a Question
router.put('/:id', updateQuestion);

// DELETE delete a Question
router.delete('/:id', deleteQuestion);

module.exports = router;
