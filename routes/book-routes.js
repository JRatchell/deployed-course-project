const express = require('express');
const router = express.Router();
const bookController = require('../controllers/book-controller');

router.route('/')
    .get(bookController.create);

router.route('/:id')
    .get(bookController.bookDetail)
    .get(bookController.delete)
    .get(bookController.edit);

module.exports = router;
