const path = require('path');

const router = require('express').Router();

const db = require('./models');

// Query google books API
router.post('/api/search', (req, res) => {
    const query = req.body.search.replace(/\s+/g, '+');
    fetch('https://www.googleapis.com/books/v1/volumes?q=' + query + '&key=' + process.env.googleAPI)
        .then(result => {
            console.log(result);
        })
        .catch(err => {
            console.log(err);
        });
});



// Return all saved books as JSON
router.get('/api/books', (req, res) => {
    db.Books.find({})
        .then(books => {
            res.json(books)
        })
        .catch(err => {
            console.log(err);
        })
});


// Save new book to db
router.post('/api/books', (req, res) => {

});

// Delete book from db based on _id
router.delete('/api/books/:id', (req, res) => {

});

// Send all other routes to React
router.get("*", (req, res) => {
    // res.sendFile(path.join(__dirname, "./client/build/index.html"));
    console.log('success');
});

module.exports = router;