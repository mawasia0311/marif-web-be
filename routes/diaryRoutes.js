const express = require('express');
const router = express.Router();
const {
  getAllDiaries,
  getDiaryById,
  createDiary,
  updateDiary,
  deleteDiary
} = require('../resolvers/diaryResolvers');

router.get('/', getAllDiaries);
router.get('/:id', getDiaryById);
router.post('/', createDiary);
router.put('/:id', updateDiary);
router.delete('/:id', deleteDiary);

module.exports = router;
