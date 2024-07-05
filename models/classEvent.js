// Assuming you have Sequelize and DataTypes imported
module.exports = (sequelize, DataTypes) => {
  const ClassEvent = sequelize.define('ClassEvent', {
    subject: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    teacher: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    room: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    startTime: {
      type: DataTypes.DATE, // Adjust data type based on actual requirements
      allowNull: false,
    },
    endTime: {
      type: DataTypes.DATE, // Adjust data type based on actual requirements
      allowNull: false,
    },
    day: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isIn: [['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday', null]],
      },
    },
    isEveryWeekEvent: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  ClassEvent.associate = (models) => {
    ClassEvent.belongsTo(models.Class);
  }

  return ClassEvent;
};
