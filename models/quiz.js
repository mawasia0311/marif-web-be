module.exports = (sequelize, DataTypes) => {
  const Quiz = sequelize.define('Quiz', {
    title: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  Quiz.associate = (models) => {
    Quiz.hasMany(models.Question);
  }

  return Quiz;
};
