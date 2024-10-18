// /routes/dashboard.js
const express = require('express');
const router = express.Router();
const { fetchStudentProgress } = require('../controllers/dashboardController');

// Route to fetch student progress
router.post('/progress', fetchStudentProgress);

module.exports = router;
