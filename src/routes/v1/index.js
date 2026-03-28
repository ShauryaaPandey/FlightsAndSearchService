const express = require('express');
const citycontroller = require('../../controllers/city-controller');

//here also creating a router object 
const router = express.Router();

router.post('/city',citycontroller.create);
router.delete('/city/:id',citycontroller.destroy);
router.get('/city/:id',citycontroller.get);
router.patch('/city/:id',citycontroller.update);
router.get('/city',citycontroller.getAll);
//this one for all city related request

module.exports = router;