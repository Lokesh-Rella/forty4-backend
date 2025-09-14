// server.js
const express = require('express');
const cors = require('cors');
const db = require('./database.js'); // Ensure this is imported to initialize DB
const userRoutes = require("./routers/users.js");

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON request bodies

// API Routes
app.use('/api/users', userRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
