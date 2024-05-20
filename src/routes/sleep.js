const express = require('express');
const { addSleepRecord, getSleepRecordsByUser, deleteSleepRecord } = require('../data/sleepData');

const router = express.Router();

router.post('/', (req, res) => {
    const { userId, hours, timestamp } = req.body;
    if (!userId || !hours || !timestamp) {
        return res.status(400).json({ error: 'Missing required fields' });
    }
    const newRecord = addSleepRecord(userId, hours, timestamp);
    res.status(201).json(newRecord);
});

router.get('/:userId', (req, res) => {
    const { userId } = req.params;
    const records = getSleepRecordsByUser(userId);
    res.status(200).json(records);
});

router.delete('/:recordId', (req, res) => {
    const { recordId } = req.params;
    const deletedRecord = deleteSleepRecord(recordId);
    if (deletedRecord) {
        res.status(200).json(deletedRecord);
    } else {
        res.status(404).json({ error: 'Record not found' });
    }
});

module.exports = router;
