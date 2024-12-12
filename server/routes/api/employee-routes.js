const router = require('express').Router();

// Import any controllers needed here
const { createEmployee, authEmployee, verifyEmployee, getEmployees } = require('../../controllers/employee-controller');

// Declare the routes that point to the controllers above
router.route('/employee').post(createEmployee);
router.route('/employee').get(getEmployees);
router.route('/employee/auth').post(authEmployee);
router.route('/employee/verify').post(verifyEmployee);

module.exports = router;
