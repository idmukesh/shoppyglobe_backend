import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import productRouter from './Router/productRouter.js';  // Import the routes

const app = express();
// Middleware setup
app.use(cors());  // Enable CORS
app.use(express.json());  // Parse incoming JSON requests

// Use routes
app.use(productRouter);  // Use the product routes

// Start the server
app.listen(5100, () => {
    console.log("Server is running on port 5100");
});

// MongoDB connection setup
mongoose.connect("mongodb://localhost:27017/ShoppyGlobe");

const db = mongoose.connection;

// Check MongoDB connection
db.on("open", () => {
    console.log("Connected to MongoDB");
});

db.on("error", (err) => {
    console.log("Failed to connect to MongoDB:", err);
});

