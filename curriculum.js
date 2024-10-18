// /routes/curriculum.js
const express = require('express');
const router = express.Router();
const { fetchPersonalizedCurriculum } = require('../controllers/curriculumController');

// Route to fetch personalized curriculum
router.post('/personalized', fetchPersonalizedCurriculum);

module.exports = router;
