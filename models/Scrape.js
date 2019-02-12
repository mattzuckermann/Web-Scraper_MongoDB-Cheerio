const mongoose = require(`mongoose`);

// Save a reference to the Schema constructor
// eslint-disable-next-line prefer-destructuring
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
const ScrapeSchema = new Schema({
  // `headline` is required and of type String
  headline: {
    type: String,
    required: true,
  },

  // `url` is required and of type String
  url: {
    type: String,
    required: true,
  },

  // `summary` is required and of type String
  summary: {
    type: String,
    required: true,
  },

  // `image` is required and of type String
  image: {
    type: String,
    required: false,
  },

  // `author` is required and of type String
  author: {
    type: String,
    required: true,
  },

  // `note` is an object that stores a Note id
  // The ref property links the ObjectId to the Note model
  // This allows us to populate the Article with an associated Note
  note: [
    {
      type: Schema.Types.ObjectId,
      ref: `Note`,
    },
  ],
});

// This creates our model from the above schema, using mongoose's model method
const Scrape = mongoose.model(`Scrape`, ScrapeSchema);

// Export the Scrape model
module.exports = Scrape;
