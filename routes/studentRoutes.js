const express = require('express');
const router = express.Router();
const {
  createStudent,
  getAllStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
} = require('../resolvers/studentResolvers');

// GET all Students
router.get('/', getAllStudents);

// Get a single student by ID
router.get('/:id', getStudentById);

// POST create a new Student
router.post('/', createStudent);

// PUT update a Student
router.put('/:id', updateStudent);

// DELETE delete a Student
router.delete('/:id',deleteStudent);

module.exports = router;
