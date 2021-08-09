const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: String,
  wrong_answers: Number,
  right_ansewers: Number,
  id_class: String,
});

module.exports = mongoose.model('User', UserSchema);