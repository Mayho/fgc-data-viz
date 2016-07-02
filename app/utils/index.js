var axios = require('axios');

const API = 'YOUR_API_URL/'

var module = {
  getInfo: function (someParams) {
    return axios.get(API + someParams);
  }
};

module.exports = module;
