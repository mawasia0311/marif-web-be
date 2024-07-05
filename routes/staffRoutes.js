// routes/staffRoutes.js

const express = require('express');
const router = express.Router();
const {
  createStaffMember,
  getAllStaffMembers,
  getStaffMemberById,
  updateStaffMember,
  deleteStaffMember,
} = require('../resolvers/staffResolvers');

// Create a new staff member
router.post('/', createStaffMember);

// Get all staff members
router.get('/', getAllStaffMembers);

// Get a single staff member by ID
router.get('/:id', getStaffMemberById);

// Update a staff member by ID
router.put('/:id', updateStaffMember);

// Delete a staff member by ID
router.delete('/:id', deleteStaffMember);

module.exports = router;
