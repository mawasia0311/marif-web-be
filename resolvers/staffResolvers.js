// resolvers/staffResolver.js

const { Staff } = require('../models');

// Create a new staff member
const createStaffMember = async (req, res) => {
  try {
    const newStaffMember = await Staff.create(req.body);
    res.status(201).json(newStaffMember);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all staff members
const getAllStaffMembers = async (req, res) => {
  try {
    const staffMembers = await Staff.findAll();
    res.json(staffMembers);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get a single staff member by ID
const getStaffMemberById = async (req, res) => {
  const { id } = req.params;
  try {
    const staffMember = await Staff.findByPk(id);
    if (!staffMember) throw new Error('Staff member not found');
    res.json(staffMember);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

// Update a staff member by ID
const updateStaffMember = async (req, res) => {
  const { id } = req.params;
  try {
    const [updated] = await Staff.update(req.body, {
      where: { id },
    });
    if (updated) {
      const updatedStaffMember = await Staff.findByPk(id);
      res.json(updatedStaffMember);
    } else {
      throw new Error('Staff member not found');
    }
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

// Delete a staff member by ID
const deleteStaffMember = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Staff.destroy({
      where: { id },
    });
    if (deleted) {
      res.status(204).send();
    } else {
      throw new Error('Staff member not found');
    }
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = {
  createStaffMember,
  getAllStaffMembers,
  getStaffMemberById,
  updateStaffMember,
  deleteStaffMember,
};
