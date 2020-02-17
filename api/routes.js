const path = require('path');

const axios = require('axios');

const db = require('./models');

module.exports = function (app) {

    // Query google books API
    app.get('/api/search/:search', (req, res) => {
        const query = req.params.search.replace(/\s+/g, '+');
        axios.get('https://www.googleapis.com/books/v1/volumes?q=' + query + '&key=' + process.env.googleAPI)
            .then(response => {
                return res.json({ items: response.data.items });
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
    app.post('/api/save/', (req, res) => {
        console.log(req.body);
        // db.Books.create(req.body)

    });

    // Delete book from db 
    app.delete('/api/delete/:id', (req, res) => {
        db.Books.remove(req.params.id)
            .catch(err => {
                console.log(err);
            });
    });

    // Send all other routes to React
    app.get("*", (req, res) => {
        // res.sendFile(path.join(__dirname, "./client/build/index.html"));
        console.log('Send route to React');
    });

}