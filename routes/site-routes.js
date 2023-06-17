const express = require('express');
const router = express.Router();
const siteController = require('../controllers/site-controller')

router.route('/')
    .get(siteController.index);

router.route('/about')
    .get(siteController.about);

router.route('/login')
    .get(siteController.login)
    .post(siteController.login_post);

router.route('/auth/google')
    .get(siteController.google_get);

router.route('/auth/google/admin')
    .get(siteController.google_redirect_get);

router.route('/logout')
    .get(siteController.logout);
    

router.route('/register')
    .get(siteController.register)
    .post(siteController.register_post);



module.exports = router;