const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: { type: String },
    authors: [{ type: String }],
    description: { type: String },
    image: String,
    link: String,
    saved: { type: Boolean, default: false }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;