const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Middleware to serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to prevent direct access to server-side files
app.use('/server', (req, res, next) => {
  res.status(403).send('Access denied.');
});

// ... Define your routes and other middleware here ...

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
