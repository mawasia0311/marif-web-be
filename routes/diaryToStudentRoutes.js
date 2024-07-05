const express = require('express');
const router = express.Router();
const {
  createDiaryToStudent,
  getAllDiaryToStudents,
  getDiaryToStudentById,
  updateDiaryToStudent,
  deleteDiaryToStudent,
} = require('../resolvers/diaryToStudentResolvers');

// GET all DiaryToStudents
router.get('/', getAllDiaryToStudents);

// Get a single DiaryToStudent by ID
router.get('/:id', getDiaryToStudentById);

// POST create a new DiaryToStudent
router.post('/', createDiaryToStudent);

// PUT update a DiaryToStudent
router.put('/:id', updateDiaryToStudent);

// DELETE delete a DiaryToStudent
router.delete('/:id', deleteDiaryToStudent);

module.exports = router;
