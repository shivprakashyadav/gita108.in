const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Example route
app.get('/', (req, res) => {
  res.send('Welcome to Gita108 Backend!');
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});