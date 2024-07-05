module.exports = (sequelize, DataTypes) => {
  const Parent = sequelize.define('Parent', {
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    dateOfBirth: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    cnic: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    emergencyPhone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  });

  Parent.assiciate = (models) => {
    Parent.hasMany(models.student, {
      foreignkey: 'parentId',
      as: 'children'
    })
  }

  return Parent;
};
