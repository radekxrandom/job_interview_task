const express = require('express');
const router = express.Router();
const eventsApi = require('../controllers/events-api.controller')
const validate = require('../middlewares/validator.middleware');
const eventSchema = require('../schemas/event.schema');

router.get('/', eventsApi.getEvents);
router.post('/', validate(eventSchema), eventsApi.createEvent);

module.exports = router;
