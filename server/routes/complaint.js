const express = require('express');
const router = express.Router();
const complaintController = require('../controllers/complaintController');
// Create a new complaint
router.post('/complaints', complaintController.createComplaint);

// Get a list of complaints
router.get('/list', complaintController.getComplaints);

// Update the status of a complaint
router.put('/complaints/:id', complaintController.updateComplaintStatus);


module.exports = router;
