const express = require('express');
const router = express.Router();
const {
  createQuiz,
  getAllQuizzes,
  getQuizById,
  updateQuiz,
  deleteQuiz,
} = require('../resolvers/quizResolvers');

// GET all Quizzes
router.get('/', getAllQuizzes);

// Get a single Quiz by ID
router.get('/:id', getQuizById);

// POST create a new Quiz
router.post('/', createQuiz);

// PUT update a Quiz
router.put('/:id', updateQuiz);

// DELETE delete a Quiz
router.delete('/:id', deleteQuiz);

module.exports = router;
