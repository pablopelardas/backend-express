const models = require('../database/models');

module.exports = {
  name: 'test',
  index: async (req, res, next) => {
    console.log(models.test);
    res.send('Hello World!');
  },
};
