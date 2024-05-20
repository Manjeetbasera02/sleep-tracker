// Import the UUID package to generate unique IDs
const { v4: uuidv4 } = require('uuid');

// Initialize an in-memory array to store sleep records
let sleepRecords = [];

// Function to add a new sleep record
const addSleepRecord = (userId, hours, timestamp) => {
    const newRecord = { id: uuidv4(), userId, hours, timestamp };
    sleepRecords.push(newRecord);
    return newRecord;
};

// Function to get all sleep records for a specific user, sorted by date
const getSleepRecordsByUser = (userId) => {
    return sleepRecords.filter(record => record.userId === userId).sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
};

// Function to delete a sleep record by its ID
const deleteSleepRecord = (recordId) => {
    const index = sleepRecords.findIndex(record => record.id === recordId);
    if (index !== -1) {
        return sleepRecords.splice(index, 1)[0];
    }
    return null;
};

// Export the functions for use in other parts of the application
module.exports = { addSleepRecord, getSleepRecordsByUser, deleteSleepRecord };
