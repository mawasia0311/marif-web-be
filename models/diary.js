module.exports = (sequelize, DataTypes) => {
  const Diary = sequelize.define('Diary', {
    title: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    subject: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    toClass: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    links: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    },
    type: {
      type: DataTypes.ENUM('homework', 'note'),
      allowNull: true,
    },
    downloadableResources: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    },
    selectedStudents: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    },
    activityId: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  });

  Diary.associate = (models) => {
    Diary.belongsTo(models.Class);
  }

  return Diary;
};
