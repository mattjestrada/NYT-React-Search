// Dependecies
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve up static assets if in production (running on Heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/nytarticles", {
    useMongoClient: true
  }
);

// Start the API server
app.listen(PORT, () =>
  console.log(`Server now listening on PORT ${PORT}!`)
);