const router = require('express').Router();
const employeeRoutes = require('./employee-routes');
const meeting= require('./meeting');

router.use('/meeting', meeting);
router.use('/employee', employeeRoutes);

module.exports = router;
