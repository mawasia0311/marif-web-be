const express = require('express');
const { sequelize } = require('./models');
const parentRoutes = require('./routes/parentRoutes');

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware to parse JSON
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api/parents', parentRoutes);
// app.use('/api/students', studentRoutes);

// Sync database and start server
sequelize.sync({ alter: true }) // force: true will drop the table if it already exists
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
