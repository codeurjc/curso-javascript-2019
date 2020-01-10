const app = require('./server')
const supertest = require('supertest')

const request = supertest(app)

test('gets the ads endpoint', async () => {

    const response = await request.get('/ads')
        .expect('Content-type', /json/)
        .expect(200)

    console.log(response.header);

    expect(response.body.length).toBe(3)

})