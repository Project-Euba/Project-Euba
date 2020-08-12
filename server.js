const express = require('express');
const mongoose = require("mongoose");

//connects to local mongo server, will be changed in production
mongoose.connect("mongodb://localhost/test", {useNewUrlParser: true, useUnifiedTopology: true});

//db.on checks for errors, db.once occurrs once the db connects
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once("open", () => {
  console.log("Connected to mongoose");
});

const app = express();
const port = process.env.PORT || 5000;

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT'});
});