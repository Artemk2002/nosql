const router = require('express').Router();
const thoughtRoutes = require('./thoughtsR');
const userRoutes = require('./userR');

router.use('/thoughts', thoughtRoutes);
router.use('/users', userRoutes);

module.exports = router; 