const { ClassEvent } = require('../models');

const getAllClassEvents = async (req, res) => {
  try {
    const classEvents = await ClassEvent.findAll();
    res.json(classEvents);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getClassEventById = async (req, res) => {
  try {
    const id = req.params.id;
    const classEvent = await ClassEvent.findByPk(id);
    if (classEvent) {
      res.json(classEvent);
    } else {
      res.status(404).json({ message: 'ClassEvent not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createClassEvent = async (req, res) => {
  try {
    const newClassEvent = await ClassEvent.create(req.body);
    res.status(201).json(newClassEvent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateClassEvent = async (req, res) => {
  try {
    const id = req.params.id;
    const [updated] = await ClassEvent.update(req.body, { where: { id } });
    if (updated) {
      const updatedClassEvent = await ClassEvent.findByPk(id);
      res.status(200).json(updatedClassEvent);
    } else {
      res.status(404).json({ message: 'ClassEvent not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteClassEvent = async (req, res) => {
  try {
    const id = req.params.id;
    const deleted = await ClassEvent.destroy({ where: { id } });
    if (deleted) {
      res.status(204).json({ message: 'ClassEvent deleted' });
    } else {
      res.status(404).json({ message: 'ClassEvent not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllClassEvents,
  getClassEventById,
  createClassEvent,
  updateClassEvent,
  deleteClassEvent
};
