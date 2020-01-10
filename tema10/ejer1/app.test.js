const app = require('./server')
const supertest = require('supertest')

const request = supertest(app)

test('when get all ads then get test adds', async () => {

    const { body } = await request.get('/ads')
        .expect('Content-type', /json/)
        .expect(200)

    expect(body[0].message).toBeTruthy();
    expect(body[0].author).toBeTruthy();
    expect(body[0].id).toBeTruthy();

})

test('when create new ad then this ad can be obtained', async () => {

    var newAd = { message: 'Compro lavadora', author: 'Manolo' };

    const { body } = await request.post('/ads')
        .send(newAd)
        .expect('Content-type', /json/)
        .expect(200)

    expect(body.id).toBeTruthy();

    const { body: getBody } = await request.get('/ads/' + body.id)
        .expect('Content-type', /json/)
        .expect(200)

    getBody.message = newAd.message;
    getBody.author = newAd.author;

})

test('when delete ad then is effectively deleted', async () => {
    await request.delete('/ads/1')
        .expect('Content-type', /json/)
        .expect(200)

    await request.get('/ads/1')
        .expect(404)

})

test('when update ad then is effectively updated', async () => {
    const updatedAd = { id: '2', message: 'new message', author: 'new author' };

    await request.put('/ads/2')
        .send(updatedAd)
        .expect('Content-type', /json/)
        .expect(200)

    var { body } = await request.get('/ads/2')
        .expect('Content-type', /json/)
        .expect(200)

    expect(body).toEqual(updatedAd);

})