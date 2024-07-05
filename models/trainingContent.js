// Assuming you have Sequelize and DataTypes imported
module.exports = (sequelize, DataTypes) => {
  const TrainingContent = sequelize.define('trainingContent', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  TrainingContent.associate = (models) => {
    TrainingContent.belongsTo(models.TrainingModule);
  };

  return TrainingContent;
};
