const router = require('express').Router();

// Import any controllers needed here
const { createDepartmentStats, getDepartmentStats } = require('../../controllers/department-stats-controller');

// Declare the routes that point to the controllers above
router.route('/').post(createDepartmentStats);
router.route('/').get(getDepartmentStats);


module.exports = router;