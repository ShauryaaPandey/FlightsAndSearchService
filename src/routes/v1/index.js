const express = require('express');
const citycontroller = require('../../controllers/city-controller');
const flightController = require('../../controllers/flight-controller');
const aiportController = require('../../controllers/airport-controller');
const {FlightMiddlewares} = require('../../middleware/index');

//here also creating a router object 
const router = express.Router();

router.post('/city',citycontroller.create);
router.delete('/city/:id',citycontroller.destroy);
router.get('/city/:id',citycontroller.get);
router.patch('/city/:id',citycontroller.update);
router.get('/city',citycontroller.getAll);
//this one for all city related request


router.post('/flights',
    FlightMiddlewares.validateCreateFlight,
    flightController.create);
router.get('/flights',flightController.getAll);
router.get('/flights/:id',flightController.getFlight);
router.patch('/flights/:id',flightController.update);

router.post('/airports',aiportController.create);

module.exports = router;