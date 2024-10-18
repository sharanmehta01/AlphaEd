// /controllers/feedbackController.js

// Simulated function to generate qualitative feedback based on student answer
const generateQualitativeFeedback = async (studentAnswer) => {
    // This is a placeholder for more complex NLP or custom feedback logic.
    if (studentAnswer.includes('subtract')) {
        return 'Great job using subtraction! However, double-check your math as there was a minor error in the calculation.';
    } else {
        return 'Good attempt! Remember to consider the order of operations for this type of problem.';
    }
};

const qualitativeFeedback = async (req, res) => {
    const { studentId, questionId, studentAnswer } = req.body;

    try {
        // Simulate fetching the student's performance (for more personalized feedback)
        // In a real implementation, you might retrieve the student's performance history here.

        // Generate qualitative feedback
        const feedback = await generateQualitativeFeedback(studentAnswer);

        res.json({
            feedback: feedback,
        });
    } catch (err) {
        res.status(500).json({ error: 'Error generating feedback' });
    }
};

module.exports = { qualitativeFeedback };
