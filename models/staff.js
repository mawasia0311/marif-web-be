// Assuming you have Sequelize and DataTypes imported
module.exports = (sequelize, DataTypes) => {
  const Staff = sequelize.define('Staff', {
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    dateOfBirth: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    cnic: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    emergencyPhone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    bloodGroup: {
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
    employmentType: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    staffCode: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true
    },
    qualification: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    workExperience: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    salary: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    dateOfJoining: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  });

  Staff.associate = (models) => {
    Staff.hasMany(models.Class, {
      foreignKey: "staffId",
    })
  }

  return Staff;
};
