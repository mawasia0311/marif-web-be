const express = require('express');
const { sequelize } = require('./models');

const parentRoutes = require('./routes/parentRoutes');
const studentRoutes = require('./routes/studentRoutes');
const staffRoutes = require('./routes/staffRoutes');
const classRoutes = require('./routes/classRoutes');
const classEventRoutes = require('./routes/classEventRoutes');
const diaryRoutes = require('./routes/diaryRoutes');
const diaryToStudentRoutes = require('./routes/diaryToStudentRoutes');
const optionRoutes = require('./routes/optionRoutes');
const questionRoutes = require('./routes/questionRoutes');
const quizRoutes = require('./routes/quizRoutes');
const trainingContentRoutes = require('./routes/trainingContentRoutes');
const trainingModuleRoutes = require('./routes/trainingModuleRoutes');

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware to parse JSON
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api/parents', parentRoutes);
app.use('/api/students', studentRoutes);
app.use('/api/staff', staffRoutes);
app.use('/api/classes', classRoutes);
app.use('/api/classEvents', classEventRoutes);
app.use('/api/diaries', diaryRoutes);
app.use('/api/diaryToStudents', diaryToStudentRoutes);
app.use('/api/options', optionRoutes);
app.use('/api/questions', questionRoutes);
app.use('/api/quizzes', quizRoutes);
app.use('/api/trainingContents', trainingContentRoutes);
app.use('/api/trainingModules', trainingModuleRoutes);

sequelize.sync({ force: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
