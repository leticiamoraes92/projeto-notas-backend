const express = require('express');
const notesRoutes = require('./routes/notesRoutes');

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.use('/api/notes', notesRoutes);

module.exports = app;
