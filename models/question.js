module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define('Question', {
    statement: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  Question.associate = (models) => {
    Question.hasMany(models.Option);
    Question.belongsTo(models.Quiz);
  }

  return Question;
};
