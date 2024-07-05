const { TrainingContent } = require('../models');

const getAllTrainingContents = async (req, res) => {
  try {
    const trainingContents = await TrainingContent.findAll();
    res.json(trainingContents);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getTrainingContentById = async (req, res) => {
  try {
    const id = req.params.id;
    const trainingContent = await TrainingContent.findByPk(id);
    if (trainingContent) {
      res.json(trainingContent);
    } else {
      res.status(404).json({ message: 'TrainingContent not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createTrainingContent = async (req, res) => {
  try {
    const newTrainingContent = await TrainingContent.create(req.body);
    res.status(201).json(newTrainingContent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateTrainingContent = async (req, res) => {
  try {
    const id = req.params.id;
    const [updated] = await TrainingContent.update(req.body, { where: { id } });
    if (updated) {
      const updatedTrainingContent = await TrainingContent.findByPk(id);
      res.status(200).json(updatedTrainingContent);
    } else {
      res.status(404).json({ message: 'TrainingContent not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteTrainingContent = async (req, res) => {
  try {
    const id = req.params.id;
    const deleted = await TrainingContent.destroy({ where: { id } });
    if (deleted) {
      res.status(204).json({ message: 'TrainingContent deleted' });
    } else {
      res.status(404).json({ message: 'TrainingContent not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllTrainingContents,
  getTrainingContentById,
  createTrainingContent,
  updateTrainingContent,
  deleteTrainingContent
};
