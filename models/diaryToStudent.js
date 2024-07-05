module.exports = (sequelize, DataTypes) => {
  const DiaryToStudent = sequelize.define('DiaryToStudent', {
    diaryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Diaries', // name of the target model
        key: 'id', // key in the target model
      }
    },
    studentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Students', // name of the target model
        key: 'id', // key in the target model
      }
    }
  });

  DiaryToStudent.associate = (models) => {
    models.Diary.belongsToMany(models.Student, {
      through: DiaryToStudent,
      foreignKey: 'diaryId',
      otherKey: 'studentId'
    });
    models.Student.belongsToMany(models.Diary, {
      through: DiaryToStudent,
      foreignKey: 'studentId',
      otherKey: 'diaryId'
    });
  }

  return DiaryToStudent;
};
