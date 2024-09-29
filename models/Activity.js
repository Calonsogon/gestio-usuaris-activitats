const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
  nom: { type: String, required: true },
  descripcio: { type: String, required: true },
  capacitat_maxima: { type: Number, required: true },
});

const Activity = mongoose.model('Activity', activitySchema);
module.exports = Activity;
