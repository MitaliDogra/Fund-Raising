const express = require('express');
const { default: connectDb } = require('./db/connection');
const app = express();
const PORT = process.env.PORT || 3000;
// import connectDb from './db/connection';

// Middleware to parse JSON requests
app.use(express.json());
connectDb();

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to the Express server!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});