const express = require('express');
const router = express.Router();
const importActivities = require('../controllers/importActivities');
const exportActivities = require('../controllers/exportActivities');
const activityController = require('../controllers/activityController');

router.post('/import', importActivities); 
router.get('/export', exportActivities); 
router.post('/', activityController.createActivity); 
router.get('/', activityController.getAllActivities); 
router.get('/:id', activityController.getActivityById); 
router.post('/:id/join', activityController.joinActivity); 

module.exports = router;
