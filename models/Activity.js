const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
    nom: { type: String, required: true },
    descripcio: { type: String, required: true },
    capacitat_maxima: { type: Number, required: true },
    usuaris_apuntats: { type: [String], default: [] }
});

module.exports = mongoose.model('Activity', activitySchema);
