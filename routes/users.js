const express = require('express');
const router = express.Router();

const uersController = require('../controllers/users');

router.get('/', uersController.getAll);

router.get('/:id', uersController.getsingle);

module.exports = router;
