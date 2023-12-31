import request from 'supertest';
import app from '../../app';

describe('GET /schedule', () => {
    it('should return 200 OK', async () => {
        const result = await request(app).get('/schedule');
        expect(result.status).toEqual(200);
    });
});

