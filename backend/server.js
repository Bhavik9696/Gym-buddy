const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');

const app = express();

// Import routes
const workoutRoutes = require('./routes/workout.js');

// Middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.method, req.path, req.body);
  next();
});

// Routes
app.get('/', (req, res) => {
  res.json({ msg: "welcome" });
});

app.use('/api/workouts', workoutRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ Mongoose is connected successfully!");
    app.listen(process.env.PORT, () => {
      console.log(`🚀 Server running on http://localhost:${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Error connecting to Mongoose:", err.message);
  });
