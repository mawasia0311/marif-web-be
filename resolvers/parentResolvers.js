const { Parent, Student } = require('../models');

const createParent = async (parentData) => {
  try {
    const parent = await Parent.create(parentData);
    return parent;
  } catch (err) {
    throw new Error(err.message);
  }
};

const getAllParents = async (where = {}) => {
  try {
    const parents = await Parent.findAll({
      where,
    });
    // Fetch children (students) for each parent manually
    const parentsWithChildren = await Promise.all(parents.map(async (parent) => {
      const children = await Student.findAll({
        where: { parentId: parent.id }
      });
      return {
        ...parent.toJSON(),
        children
      };
    }));
    return parentsWithChildren;
  } catch (err) {
    throw new Error(err.message);
  }
};

const updateParent = async (id, parentData) => {
  try {
    const [updated] = await Parent.update(parentData, {
      where: { id }
    });
    if (updated) {
      const updatedParent = await Parent.findByPk(id);
      return updatedParent;
    } else {
      throw new Error('Parent not found');
    }
  } catch (err) {
    throw new Error(err.message);
  }
};

const deleteParent = async (id) => {
  try {
    const deleted = await Parent.destroy({
      where: { id }
    });
    if (deleted) {
      return { message: 'Parent deleted successfully' };
    } else {
      throw new Error('Parent not found');
    }
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = {
  createParent,
  getAllParents,
  updateParent,
  deleteParent,
};
