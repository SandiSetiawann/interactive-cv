const express = require('express');
const cors = require('cors');
const { educationHistory, skills, projects } = require('./data.js');

const app = express();
app.use(cors());

// Endpoint untuk mendapatkan data pendidikan
app.get('/api/education', (req, res) => {
  res.json(educationHistory);
});

// Endpoint untuk mendapatkan data skill
app.get('/api/skills', (req, res) => {
  res.json(skills);
});

// Endpoint untuk mendapatkan data proyek
app.get('/api/projects', (req, res) => {
  res.json(projects);
});

// Jalankan server
module.exports.handler = serverless(app); // <- ini penting untuk Vercel
