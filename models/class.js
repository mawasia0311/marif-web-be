// Assuming you have Sequelize and DataTypes imported
module.exports = (sequelize, DataTypes) => {
  const Class = sequelize.define('Class', {
    class: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    section: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });

  Class.associate = (models) => {
    Class.belongsTo(models.Staff, {
      foreignKey: 'staffId',
      as: 'classTeacher'
    })
    Class.hasMany(models.ClassEvent);
    Class.hasMany(models.Student);
  }

  return Class;
};
