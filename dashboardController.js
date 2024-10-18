// /controllers/dashboardController.js
const User = require('../models/userModel');

// Fetch student progress and performance data
const fetchStudentProgress = async (req, res) => {
    const { studentId } = req.body;

    try {
        // Fetch the student's performance data
        const student = await User.findById(studentId);
        if (!student) {
            return res.status(404).json({ error: 'Student not found' });
        }

        // Simulate progress report (in real use case, it would pull from more data models)
        const progressReport = {
            subject: 'Math',
            completedTopics: ['Algebra', 'Geometry'],
            competencyLevel: 'Intermediate',
        };

        res.json({
            studentId: student._id,
            progressReport: progressReport,
        });
    } catch (err) {
        res.status(500).json({ error: 'Error fetching student progress' });
    }
};

module.exports = { fetchStudentProgress };
