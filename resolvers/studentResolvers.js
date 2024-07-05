// resolvers/studentResolver.js

const { Student } = require('../models');

// Create a new student
const createStudent = async (req, res) => {
  try {
    const newStudent = await Student.create(req.body);
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all students
const getAllStudents = async (req, res) => {
  try {
    const students = await Student.findAll({
      include: 'parent',
    });
    res.json(students);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get a single student by ID
const getStudentById = async (req, res) => {
  const { id } = req.params;
  try {
    const student = await Student.findByPk(id, {
      include: 'parent',
      include: 'class'
    });
    if (!student) throw new Error('Student not found');
    res.json(student);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

// Update a student by ID
const updateStudent = async (req, res) => {
  const { id } = req.params;
  try {
    const [updated] = await Student.update(req.body, {
      where: { id },
    });
    if (updated) {
      const updatedStudent = await Student.findByPk(id);
      res.json(updatedStudent);
    } else {
      throw new Error('Student not found');
    }
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

// Delete a student by ID
const deleteStudent = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Student.destroy({
      where: { id },
    });
    if (deleted) {
      res.status(204).send();
    } else {
      throw new Error('Student not found');
    }
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = {
  createStudent,
  getAllStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
};
