const Activity = require('../models/Activity');
const activitiesData = require('../data/activities.json');

exports.createActivity = async (req, res) => {
    try {
        const newActivity = new Activity(req.body);
        await newActivity.save();
        res.status(201).json(newActivity);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getAllActivities = async (req, res) => {
    try {
        const activities = await Activity.find();
        res.json(activities);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getActivityById = async (req, res) => {
    try {
        const activity = await Activity.findById(req.params.id);
        if (!activity) return res.status(404).json({ message: 'Activitat no trobada.' });
        res.json(activity);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.importActivities = async (req, res) => {
    try {
        for (let newActivity of activitiesData) {
            const existingActivity = await Activity.findOne({ nom: newActivity.nom });
            if (!existingActivity) {
               await Activity.create(newActivity);
            }
        }
        res.status(200).json({ message: 'Activitats importades correctament.' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.exportActivities = async (req, res) => {
    try {
        const activities = await Activity.find({});
        console.log('Activitats exportades:', activities);
        res.status(200).json(activities);
    } catch (error) {
        console.error('Error al exportar actividades:', error);
        res.status(500).json({ message: "Error exportant les activitats.", error });
    }
};

exports.joinActivity = async (req, res) => {
    const { id } = req.params;
    const { userId } = req.body;

    try {
        const activity = await Activity.findById(id);
        if (!activity) {
            return res.status(404).json({ message: "Activitat no trobada." });
        }

        if (!activity.usuaris_apuntats) {
            activity.usuaris_apuntats = [];
        }

        if (activity.usuaris_apuntats.includes(userId)) {
            return res.status(400).json({ message: "L'usuari ja està apuntat a aquesta activitat." });
        }

        activity.usuaris_apuntats.push(userId);
        await activity.save();

        res.status(200).json({ message: "Usuari apuntat a l'activitat amb èxit!" });
    } catch (error) {
        res.status(500).json({ message: "Error apuntant-se a l'activitat.", error });
    }
};
