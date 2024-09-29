const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  cognoms: { type: String, required: true },
  edat: { type: Number, required: true },
  email: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);
module.exports = User;
