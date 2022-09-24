const express = require('express');
const handler = require('./goals.handler');

const router = express.Router();

router.get('/', handler.findAll);

router.get('/:id', handler.findOne);

router.post('/', handler.createOne);

router.put('/:id', handler.updateOne);

router.delete('/:id', handler.deleteOne);

module.exports = router;
