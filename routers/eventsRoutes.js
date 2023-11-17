const express = require('express');
const  router = express.Router();
const eventsController = require('../controllers/eventsController');

router.get('/', eventsController.index);
router.get('/:event', eventsController.show);
router.post('/', eventsController.store);
router.put('/:event', eventsController.update);

module.exports = router;