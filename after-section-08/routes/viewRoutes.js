const express = require('express');
const viewController = require('../controllers/viewsController');
const authController = require('../controllers/authController');

const router = express.Router();
router.get('/', (req, res) => {
  res.status(200).render('base', {
    tour: 'The forest Hiker',
    user: 'Helen'
  });
});

router.get('/', viewController.getOverview);

router.get('/tour/:slug', authController.protect, viewController.getTour);

router.get('/login', viewController.getLoginForm);

module.exports = router;
