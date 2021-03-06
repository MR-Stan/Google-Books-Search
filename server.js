require('dotenv').config();

const express = require('express');

const mongoose = require('mongoose');

const app = express();

const port = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes')(app);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/googlebooks";

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));



