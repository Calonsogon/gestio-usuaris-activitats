const express = require('express');
const router = express.Router();
const Activity = require("../models/Activity");
const fs = require('fs');
const path = require('path');

router.post('/', async (req, res) => {
    try {
        const filePath = path.join(__dirname, "../data/activities.json");
        const jsonData = fs.readFileSync(filePath, "utf8");
        const activities = JSON.parse(jsonData);

        for (const activity of activities) {
             const existingActivity = await Activity.findOne({ nom: activity.nom });

            if (!existingActivity) {
                const newActivity = new Activity(activity);
                await newActivity.save();
            }
        }

        res.status(200).json({ message: "Activitats importades correctament." });
       } catch (error) {
        res.status(500).json({ message: "Error al importar les activitats.", error });
    }
});

module.exports = router;
