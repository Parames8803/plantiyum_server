const express = require('express');
const router = express.Router();
const fileHandle = require('../middlewares/fileHandle');
const { plantDetails } = require('../middlewares/plantDetails');
const { plantController, speechController, translateController } = require('../controllers/plantController');


router.use('/api/upload', fileHandle.uploadFile, plantDetails )

const routes = [
  {
    path: '/api/upload',
    methods: { POST: plantController },
  },
  {
    path: '/api/translate',
    methods: { POST: translateController },
  },
  {
    path: '/api/speechCoverter',
    methods: { POST: speechController },
  },
];


routes.forEach(route => {
  Object.entries(route.methods).forEach(([method, controller]) => {
    router[method.toLowerCase()](route.path, (req, res) => {
      controller(req, res);
    });
  });
});


module.exports = router;

