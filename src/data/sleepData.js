const { v4: uuidv4 } = require('uuid');

let sleepRecords = [];

const addSleepRecord = (userId, hours, timestamp) => {
    const newRecord = { id: uuidv4(), userId, hours, timestamp };
    sleepRecords.push(newRecord);
    return newRecord;
};

const getSleepRecordsByUser = (userId) => {
    return sleepRecords.filter(record => record.userId === userId).sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
};

const deleteSleepRecord = (recordId) => {
    const index = sleepRecords.findIndex(record => record.id === recordId);
    if (index !== -1) {
        return sleepRecords.splice(index, 1)[0];
    }
    return null;
};

module.exports = { addSleepRecord, getSleepRecordsByUser, deleteSleepRecord };
