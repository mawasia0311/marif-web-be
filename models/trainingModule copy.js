// Assuming you have Sequelize and DataTypes imported
module.exports = (sequelize, DataTypes) => {
  const TrainingModule = sequelize.define('trainingModule', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    grade: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  });

  TrainingModule.associate = (models) => {
    TrainingModule.hasMany(models.TrainingContent);
  };

  return TrainingModule;
};
