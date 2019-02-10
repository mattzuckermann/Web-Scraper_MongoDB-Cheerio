const mongoose = require(`mongoose`);

// Save a reference to the Schema constructor
// eslint-disable-next-line prefer-destructuring
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
const ScrapeSchema = new Schema({
  // `Headline` is required and of type String
  Headline: {
    type: String,
    required: true,
  },

  // `URL` is required and of type String
  URL: {
    type: String,
    required: true,
  },

  // `Summary` is required and of type String
  Summary: {
    type: String,
    required: true,
  },

  // `Image` is required and of type String
  Image: {
    type: String,
    required: false,
  },

  // `Author` is required and of type String
  Author: {
    type: String,
    required: true,
  },
});

// This creates our model from the above schema, using mongoose's model method
const Scrape = mongoose.model(`Scrape`, ScrapeSchema);

// Export the Scrape model
module.exports = Scrape;
