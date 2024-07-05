const express = require('express');
const router = express.Router();
const {
  getAllClassEvents,
  getClassEventById,
  createClassEvent,
  updateClassEvent,
  deleteClassEvent
} = require('../resolvers/classEventResolvers');

router.get('/', getAllClassEvents);
router.get('/:id', getClassEventById);
router.post('/', createClassEvent);
router.put('/:id', updateClassEvent);
router.delete('/:id', deleteClassEvent);

module.exports = router;
