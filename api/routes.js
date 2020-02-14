const path = require('path');

module.exports = function (app) {

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

// Send all other routes to React
app.get("*", (req, res) => {
    // res.sendFile(path.join(__dirname, "./client/build/index.html"));
    console.log('success');
});

}