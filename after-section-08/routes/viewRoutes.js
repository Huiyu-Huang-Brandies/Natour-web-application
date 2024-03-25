const express = require('express');
const viewController = require('../controllers/viewsController');

const router = express.Router();
router.get('/', (req, res) => {
  res.status(200).render('base', {
    tour: 'The forest Hiker',
    user: 'Helen'
  });
});

router.get('/', viewController.getOverview);

router.get('/tour/:slug', viewController.getTour);

module.exports = router;
