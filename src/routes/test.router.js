const express = require('express');

const router = express.Router();
const controllers = require('../controllers/index');

// INDEX
router.get('/', [], controllers.test.index);


module.exports = {
  basePath: '/test',
  router,
};
