const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin-controller');

router.route('/')
.get(adminController.admin_console);

router.route('/create-book')
.get(adminController.create_book);

router.route('/update-book/:id')
.get(adminController.update);

module.exports = router;