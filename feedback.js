// /routes/feedback.js
const express = require('express');
const router = express.Router();
const { qualitativeFeedback } = require('../controllers/feedbackController');

// Route to generate qualitative feedback on student answers
router.post('/qualitative-feedback', qualitativeFeedback);

module.exports = router;
