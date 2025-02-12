const router = require('express').Router();

const departmentStatsRoutes = require('./department-stats-routes.js')
const employeeRoutes = require('./employee-routes.js');
const meetingRoutes= require('./meeting-routes.js');
const messageRoutes = require('./message-routes.js');

router.use('/department', departmentStatsRoutes);
router.use('/message', messageRoutes);
router.use('/meeting', meetingRoutes);
router.use('/employee', employeeRoutes);

module.exports = router;
