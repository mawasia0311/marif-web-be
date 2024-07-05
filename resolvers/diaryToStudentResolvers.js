const { DiaryToStudent } = require('../models');

const getAllDiaryToStudents = async (req, res) => {
  try {
    const diaryToStudents = await DiaryToStudent.findAll();
    res.json(diaryToStudents);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getDiaryToStudentById = async (req, res) => {
  try {
    const id = req.params.id;
    const diaryToStudent = await DiaryToStudent.findByPk(id);
    if (diaryToStudent) {
      res.json(diaryToStudent);
    } else {
      res.status(404).json({ message: 'DiaryToStudent not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createDiaryToStudent = async (req, res) => {
  try {
    const newDiaryToStudent = await DiaryToStudent.create(req.body);
    res.status(201).json(newDiaryToStudent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateDiaryToStudent = async (req, res) => {
  try {
    const id = req.params.id;
    const [updated] = await DiaryToStudent.update(req.body, { where: { id } });
    if (updated) {
      const updatedDiaryToStudent = await DiaryToStudent.findByPk(id);
      res.status(200).json(updatedDiaryToStudent);
    } else {
      res.status(404).json({ message: 'DiaryToStudent not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteDiaryToStudent = async (req, res) => {
  try {
    const id = req.params.id;
    const deleted = await DiaryToStudent.destroy({ where: { id } });
    if (deleted) {
      res.status(204).json({ message: 'DiaryToStudent deleted' });
    } else {
      res.status(404).json({ message: 'DiaryToStudent not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllDiaryToStudents,
  getDiaryToStudentById,
  createDiaryToStudent,
  updateDiaryToStudent,
  deleteDiaryToStudent
};
