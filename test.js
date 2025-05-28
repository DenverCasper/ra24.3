const request = require('supertest');
const assert = require('assert');
const app = require('./server'); // Adjust the path as necessary

request(app)
    .get('/')
    .expect(200)
    .end((err, res) => {
        if (err) throw err;
        assert.strictEqual(res.text, 'Hello, Wolrd!');
        console.log('Test passed: Response is correct');
    });