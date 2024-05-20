// Import required modules
const express = require('express');
const { addSleepRecord, getSleepRecordsByUser, deleteSleepRecord } = require('../data/sleepData');

// Create a router for the sleep routes
const router = express.Router();

// POST /sleep - Create a new sleep record
router.post('/', (req, res) => {
    const { userId, hours, timestamp } = req.body;
    if (!userId || !hours || !timestamp) {
        return res.status(400).json({ error: 'Missing required fields' });
    }
    const newRecord = addSleepRecord(userId, hours, timestamp);
    res.status(201).json(newRecord);
});

// GET /sleep/:userId - Retrieve all sleep records for a specific user
router.get('/:userId', (req, res) => {
    const { userId } = req.params;
    const records = getSleepRecordsByUser(userId);
    res.status(200).json(records);
});

// DELETE /sleep/:recordId - Delete a specific sleep record by its ID
router.delete('/:recordId', (req, res) => {
    const { recordId } = req.params;
    const deletedRecord = deleteSleepRecord(recordId);
    if (deletedRecord) {
        res.status(200).json(deletedRecord);
    } else {
        res.status(404).json({ error: 'Record not found' });
    }
});

// Export the router for use in the main application
module.exports = router;
