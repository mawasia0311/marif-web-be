const { Diary } = require('../models');

const getAllDiaries = async (req, res) => {
  try {
    const diaries = await Diary.findAll();
    res.json(diaries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getDiaryById = async (req, res) => {
  try {
    const id = req.params.id;
    const diary = await Diary.findByPk(id);
    if (diary) {
      res.json(diary);
    } else {
      res.status(404).json({ message: 'Diary not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createDiary = async (req, res) => {
  try {
    const newDiary = await Diary.create(req.body);
    res.status(201).json(newDiary);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateDiary = async (req, res) => {
  try {
    const id = req.params.id;
    const [updated] = await Diary.update(req.body, { where: { id } });
    if (updated) {
      const updatedDiary = await Diary.findByPk(id);
      res.status(200).json(updatedDiary);
    } else {
      res.status(404).json({ message: 'Diary not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteDiary = async (req, res) => {
  try {
    const id = req.params.id;
    const deleted = await Diary.destroy({ where: { id } });
    if (deleted) {
      res.status(204).json({ message: 'Diary deleted' });
    } else {
      res.status(404).json({ message: 'Diary not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllDiaries,
  getDiaryById,
  createDiary,
  updateDiary,
  deleteDiary
};
