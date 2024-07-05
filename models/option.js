module.exports = (sequelize, DataTypes) => {
  const Option = sequelize.define('Option', {
    statement: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    isCorrect: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      default: false
    }
  });

  Option.associate = (models) => {
    Option.belongsTo(models.Question);
  }

  return Option;
};
