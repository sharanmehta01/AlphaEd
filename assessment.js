// /routes/assessment.js
const express = require('express');
const router = express.Router();
const { generateQuestion } = require('../controllers/assessmentController');

// Route to generate a new adaptive question
router.post('/generate-question', generateQuestion);

module.exports = router;
