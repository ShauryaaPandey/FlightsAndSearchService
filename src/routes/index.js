const express = require('express');
const router = express.Router();

const v1ApiRoutes = require('./v1');
//is v1 folder me hm sare v1 route files dalenge 
const v2ApiRoutes = require('./v2');


//v1 as prefix and map it to v1ApiRoutes
router.use('/v1' , v1ApiRoutes);
//mtlb jo api v1 s start usko v1 ki routes s map krdo
router.use('/v2',v2ApiRoutes);

module.exports = router;