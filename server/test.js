const request = require('supertest');
const app = require('./app.js');
const { getRandomFutureDate, getRandomPastDate } = require('./dateUtils');

const onEnd = (err, res, makeRequest, done) => {
    if (res.status === 500) { // try again on server error
        makeRequest();
        return;
    } else if (!!err) {
        done(err);
        return;
    }
    done();
}

describe('GET /', () => {
    it('should respond with html', (done) => {
        request(app)
            .get('/')
            .set('Accept', 'text/html')
            .expect('Content-Type', /html/)
            .expect(200)
            .end((err, res) => {
                if (!!err) return done(err);
                done();
            });
    });
});

describe('GET /events', () => {
    it('should respond with json', (done) => {
        const makeRequest = () => {
            request(app)
                .get('/events')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200)
                .end((err, res) => onEnd(err, res, makeRequest, done));
        };

        makeRequest();
    });
});

describe('POST /events', () => {
    it('should respond with 200', (done) => {
        const makeRequest = () => {
            request(app)
                .post('/events')
                .send({ id: 133, name: 'Paul McCartney', date: getRandomFutureDate(), venue: 'United Center' })
                .expect(200)
                .end((err, res) => onEnd(err, res, makeRequest, done));
        };

        makeRequest();
    });

    it('should respond with 400 for duplicate id', (done) => {
        const duplicateId = 123;
        const makeRequest = () => {
            request(app)
                .post('/events')
                .send({ id: duplicateId, name: 'Paul McCartney', date: getRandomPastDate(), venue: 'United Center' })
                .expect(400)
                .end((err, res) => onEnd(err, res, makeRequest, done));
        }

        makeRequest();
    });

    it('should respond with 400 for incomplete data', (done) => {
        const makeRequest = () => {
            request(app)
                .post('/events')
                .send({ id: 134, name: 'Paul McCartney' })
                .expect(400)
                .end((err, res) => onEnd(err, res, makeRequest, done));
        };

        makeRequest();
    });
});

describe('DELETE /events', () => {
    it('should respond with json', (done) => {
        const makeRequest = () => {
            request(app)
            .delete('/events')
            .send({ id: 124 })
            .expect(200)
            .end((err, res) => onEnd(err, res, makeRequest, done));
        }

        makeRequest();
    });

    it('should respond with 400 when no event exists with id', (done) => {
        const newId = 10000;
        const makeRequest = () => {
            request(app)
                .delete('/events')
                .send({ id: newId })
                .expect(400)
                .end((err, res) => onEnd(err, res, makeRequest, done));
        }

        makeRequest();
    });
});
