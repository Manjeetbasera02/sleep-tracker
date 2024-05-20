// Import required modules for testing
import request from 'supertest';
import { expect } from 'chai';
import app from '../src/app.js';

// Describe the test suite for the Sleep Tracker API
describe('Sleep Tracker API', () => {
    let recordId;

    // Test for creating a new sleep record
    it('should create a new sleep record', async () => {
        const response = await request(app)
            .post('/sleep')
            .send({ userId: 'user1', hours: 8, timestamp: '2024-05-19T08:00:00Z' });
        expect(response.status).to.equal(201);
        expect(response.body).to.have.property('id');
        recordId = response.body.id;
    });

    // Test for retrieving sleep records for a user
    it('should retrieve sleep records for a user', async () => {
        const response = await request(app).get('/sleep/user1');
        expect(response.status).to.equal(200);
        expect(response.body).to.be.an('array');
        expect(response.body[0]).to.have.property('userId', 'user1');
    });

    // Test for deleting a sleep record
    it('should delete a sleep record', async () => {
        const response = await request(app).delete(`/sleep/${recordId}`);
        expect(response.status).to.equal(200);
        expect(response.body).to.have.property('id', recordId);
    });

    // Test for handling non-existing record deletion
    it('should return 404 for non-existing record', async () => {
        const response = await request(app).delete('/sleep/non-existing-id');
        expect(response.status).to.equal(404);
    });
});
