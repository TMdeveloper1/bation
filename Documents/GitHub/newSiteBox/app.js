require('dotenv').config();
const express = require('express');
const path = require('path');
const routes = require('./route');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Check if the connection is successful
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB database!');
});

// Use your API routes
app.use('/api', routes);

// Set up express to serve your Angular application
app.use(express.static(path.join(__dirname, '/dist/jc-box')));

// This should be the last route else any after this won't work
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/jc-box/index.html'));
});

// Listen to the correct port
app.listen(port, () => console.log(`Server running on port ${port}`));
