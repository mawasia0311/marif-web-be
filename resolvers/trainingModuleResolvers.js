const { TrainingModule } = require('../models');

const getAllTrainingModules = async (req, res) => {
  try {
    const trainingModules = await TrainingModule.findAll();
    res.json(trainingModules);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getTrainingModuleById = async (req, res) => {
  try {
    const id = req.params.id;
    const trainingModule = await TrainingModule.findByPk(id);
    if (trainingModule) {
      res.json(trainingModule);
    } else {
      res.status(404).json({ message: 'TrainingModule not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createTrainingModule = async (req, res) => {
  try {
    const newTrainingModule = await TrainingModule.create(req.body);
    res.status(201).json(newTrainingModule);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateTrainingModule = async (req, res) => {
  try {
    const id = req.params.id;
    const [updated] = await TrainingModule.update(req.body, { where: { id } });
    if (updated) {
      const updatedTrainingModule = await TrainingModule.findByPk(id);
      res.status(200).json(updatedTrainingModule);
    } else {
      res.status(404).json({ message: 'TrainingModule not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteTrainingModule = async (req, res) => {
  try {
    const id = req.params.id;
    const deleted = await TrainingModule.destroy({ where: { id } });
    if (deleted) {
      res.status(204).json({ message: 'TrainingModule deleted' });
    } else {
      res.status(404).json({ message: 'TrainingModule not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllTrainingModules,
  getTrainingModuleById,
  createTrainingModule,
  updateTrainingModule,
  deleteTrainingModule
};
