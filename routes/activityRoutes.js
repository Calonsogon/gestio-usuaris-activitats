const express = require('express');
const router = express.Router();
const activityController = require('../controllers/activityController');

router.post('/', activityController.createActivity); 
router.get('/', activityController.getAllActivities); 
router.get('/:id', activityController.getActivityById); 
router.post('/import', activityController.importActivities); 
router.get('/export', activityController.exportActivities); 
router.post('/:id/join', activityController.joinActivity); 

module.exports = router;
