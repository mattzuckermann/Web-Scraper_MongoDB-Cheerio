// Requiring NPM Packages
const express = require(`express`);
const exphbs = require(`express-handlebars`);
const handlebars = require(`handlebars`);
const axios = require(`axios`);
const cheerio = require(`cheerio`);

// Setting Up Server
const app = express();
const PORT = process.env.PORT || 3000;

// Setting Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(`public`));

// Setting Up Handlebars
app.engine(
  `handlebars`,
  exphbs({
    defaultLayout: `main`,
  })
);
app.set(`view engine`, `handlebars`);

// // Setting Up Routes
require(`./routes/apiRoutes`)(app, axios, cheerio);
require(`./routes/htmlRoutes`)(app);

// Listening to Server
app.listen(
  PORT,
  console.log(`App is listening on port %s and can be found on http://localhost:%s`, PORT, PORT)
);

module.exports = app;
