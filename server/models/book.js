const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: String,
  author: String,
  addedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }
});

// Create the model class
const ModelClass = mongoose.model('book', bookSchema);

// Export the model
module.exports = ModelClass;
