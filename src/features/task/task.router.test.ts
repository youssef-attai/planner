import request from 'supertest';
import app from '../../app';

describe('GET /task', () => {
    it('should return 200 OK', async () => {
        const result = await request(app).get('/task');
        expect(result.status).toEqual(200);
    });
});

