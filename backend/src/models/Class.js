const mongoose = require('mongoose');

const ClassSchema = new mongoose.Schema({
  id_class: String,
  class_name: String,
  id_professor: String,
});

module.exports = mongoose.model('Class', ClassSchema);