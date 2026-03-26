const express = require('express');
const citycontroller = require('../../controllers/city-controller');

//here also creating a router object 
const router = express.Router();

router.post('/city',citycontroller.create);

module.exports = router;