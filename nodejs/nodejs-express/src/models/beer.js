const mongoose = require('mongoose');

// define the beer schema
const BeerSchema = new mongoose.Schema({
  name: String,
  type: String,
  quantity: Number,
});

// export the model
module.exports = mongoose.model('Beer', BeerSchema);
