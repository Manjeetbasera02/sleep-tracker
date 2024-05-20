import request from 'supertest';
import { expect } from 'chai';
import app from '../src/app.js';

describe('Sleep Tracker API', () => {
    let recordId;

    it('should create a new sleep record', async () => {
        const response = await request(app)
            .post('/sleep')
            .send({ userId: 'user1', hours: 8, timestamp: '2024-05-19T08:00:00Z' });
        expect(response.status).to.equal(201);
        expect(response.body).to.have.property('id');
        recordId = response.body.id;
    });

    it('should retrieve sleep records for a user', async () => {
        const response = await request(app).get('/sleep/user1');
        expect(response.status).to.equal(200);
        expect(response.body).to.be.an('array');
        expect(response.body[0]).to.have.property('userId', 'user1');
    });

    it('should delete a sleep record', async () => {
        const response = await request(app).delete(`/sleep/${recordId}`);
        expect(response.status).to.equal(200);
        expect(response.body).to.have.property('id', recordId);
    });

    it('should return 404 for non-existing record', async () => {
        const response = await request(app).delete('/sleep/non-existing-id');
        expect(response.status).to.equal(404);
    });
});
