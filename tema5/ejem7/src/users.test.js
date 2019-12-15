const axios = require('axios');
const Users = require('./users');

jest.mock('axios');

test('should fetch users', async () => {

    const users = [{ name: 'Bob' }];
    const resp = { data: users };
    
    axios.get.mockResolvedValue(resp);

    expect(await Users.all()).toEqual(users);
});