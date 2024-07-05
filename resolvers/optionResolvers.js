const { Option } = require('../models');

const getAllOptions = async (req, res) => {
  try {
    const options = await Option.findAll();
    res.json(options);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getOptionById = async (req, res) => {
  try {
    const id = req.params.id;
    const option = await Option.findByPk(id);
    if (option) {
      res.json(option);
    } else {
      res.status(404).json({ message: 'Option not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createOption = async (req, res) => {
  try {
    const newOption = await Option.create(req.body);
    res.status(201).json(newOption);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateOption = async (req, res) => {
  try {
    const id = req.params.id;
    const [updated] = await Option.update(req.body, { where: { id } });
    if (updated) {
      const updatedOption = await Option.findByPk(id);
      res.status(200).json(updatedOption);
    } else {
      res.status(404).json({ message: 'Option not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteOption = async (req, res) => {
  try {
    const id = req.params.id;
    const deleted = await Option.destroy({ where: { id } });
    if (deleted) {
      res.status(204).json({ message: 'Option deleted' });
    } else {
      res.status(404).json({ message: 'Option not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllOptions,
  getOptionById,
  createOption,
  updateOption,
  deleteOption
};
