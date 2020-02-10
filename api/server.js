const express = require('express');

const path = require("path");

const port = process.env.PORT || 5000;

const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

// Return all saved books as JSON
app.get('/api/books', (req, res) => {
  
});

// Save new book to db
app.post('/api/books', (req, res) => {

});

// Delete book from db based on _id
app.delete('/api/books/:id', (req, res) => {
  
});

// Load client/build/index.html
app.get('*', (req, res) => {

});