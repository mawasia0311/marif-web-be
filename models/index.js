const { Sequelize } = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];

const sequelize = new Sequelize(config.database, config.username, config.password, config);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// db.User = require('./user')(sequelize, Sequelize);
db.Parent = require('./parent')(sequelize, Sequelize);
db.Student = require('./student')(sequelize, Sequelize);
db.TrainingModule = require('./trainingModule')(sequelize, Sequelize);
db.TrainingContent = require('./trainingContent')(sequelize, Sequelize);
db.Staff = require('./staff')(sequelize, Sequelize);
db.Class = require('./class')(sequelize, Sequelize);
db.ClassEvent = require('./classEvent')(sequelize, Sequelize);
db.Diary = require('./diary')(sequelize, Sequelize);
db.Quiz = require('./quiz')(sequelize, Sequelize);
db.Question = require('./question')(sequelize, Sequelize);
db.Option = require('./option')(sequelize, Sequelize);

// Define associations
Object.values(db)
  .filter(model => typeof model.associate === 'function')
  .forEach(model => model.associate(db));

module.exports = db;
