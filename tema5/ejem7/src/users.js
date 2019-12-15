const axios = require('axios');

module.exports = class Users {
  static async all() {
    let resp = await axios.get('/users.json');
    return resp.data;
  }
}