const router = require('express').Router();
const employeeRoutes = require('./employee-routes');
const meetingRoutes= require('./meeting-routes');
const messageRoutes = require('./message-routes');

router.use('/message', messageRoutes);
router.use('/meeting', meetingRoutes);
router.use('/employee', employeeRoutes);

module.exports = router;
