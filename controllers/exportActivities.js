const express = require('express');
const router = express.Router();
const Activity = require("../models/Activity.js");
const fs = require('fs');
const path = require('path');

router.get('/', async (req, res) => {
    try {
        const activities = await Activity.find({});
        if (!activities.length) {
            return res.status(404).json({ message: "No hi ha activitats per exportar." });
        }

        const filePath = path.join(__dirname, "../data/activities.json");
        fs.writeFileSync(filePath, JSON.stringify(activities, null, 2), "utf8");

        res.status(200).json({ message: "Activitats exportades correctament.", filePath });
    } catch (error) {
        res.status(500).json({
            message: "Error al exportar les activitats.",
            error: error.message,
        });
    }
});

module.exports = router;