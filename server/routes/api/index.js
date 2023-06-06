const router = require('express').Router();
const employeeRoutes = require('./employee-routes');
const todoRoutes = require('./todo-routes');

router.use('/meeting', todoRoutes);
router.use('/employee', employeeRoutes);

module.exports = router;
