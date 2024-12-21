const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  email: { type: String, required: true },
  description: String,
  color: String,
});

const Category = mongoose.model('Category', categorySchema);
module.exports = Category;
