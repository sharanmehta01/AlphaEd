
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const assessmentRoutes = require('./routes/assessment');
const dashboardRoutes = require('./routes/dashboard');
const curriculumRoutes = require('./routes/curriculum');

const app = express();
app.use(express.json());

// Define routes
app.use('/auth', authRoutes);
app.use('/assessment', assessmentRoutes);
app.use('/dashboard', dashboardRoutes);
app.use('/curriculum', curriculumRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

mongoose.connect('mongodb://localhost:27017/adaptive_learning', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));
