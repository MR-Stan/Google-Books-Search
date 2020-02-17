const path = require('path');

const db = require('./models');

module.exports = function (app) {

    // Query google books API
    app.post('/api/search', (req, res) => {
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
    app.get('/api/books', (req, res) => {
        db.Books.find({})
            .then(books => {
                res.json(books)
            })
            .catch(err => {
                console.log(err);
            })
    });


    // Save new book to db
    app.post('/api/save/:id', (req, res) => {
        // set saved to true
    });

    // Delete book from db 
    app.delete('/api/delete/:id', (req, res) => {

    });

    // Send all other routes to React
    app.get("*", (req, res) => {
        // res.sendFile(path.join(__dirname, "./client/build/index.html"));
        console.log('Send route to React');
    });

}