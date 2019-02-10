const mongoose = require(`mongoose`);

// Save a reference to the Schema constructor
// eslint-disable-next-line prefer-destructuring
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
const NoteSchema = new Schema({
  // `Subject` is required and of type String
  Subject: {
    type: String,
    required: true,
  },

  // `Author` is required and of type String
  Author: {
    type: String,
    required: true,
  },

  // `Body` is required and of type String
  Body: {
    type: String,
    required: true,
  },
});

// This creates our model from the above schema, using mongoose's model method
const Note = mongoose.model(`Note`, NoteSchema);

// Export the Scrape model
module.exports = Note;
