// Requiring NPM Packages
const express = require(`express`);
const exphbs = require(`express-handlebars`);
const handlebars = require(`handlebars`);
const axios = require(`axios`);
const cheerio = require(`cheerio`);
const mongoose = require(`mongoose`);
const db = require(`./models`);

// Setting Up Server
const app = express();
const PORT = process.env.PORT || 3000;

// Setting Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(`public`));

// Connect to the Mongo DB
// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
const MONGODB_URI = process.env.MONGODB_URI || `mongodb://localhost/mongoHeadlines`;
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

// Setting Up Handlebars
app.engine(
  `handlebars`,
  exphbs({
    defaultLayout: `main`,
  })
);
app.set(`view engine`, `handlebars`);

// Setting Up Controller Routes
require(`./controllers/apiRoutes`)(app, axios, cheerio, db);
require(`./controllers/htmlRoutes`)(app, db);

// Listening to Server
app.listen(
  PORT,
  console.log(`App listening on port %s and can be found on http://localhost:%s`, PORT, PORT)
);

module.exports = app;
