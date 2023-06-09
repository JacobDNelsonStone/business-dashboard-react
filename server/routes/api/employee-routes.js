const router = require('express').Router();

// Import any controllers needed here
const { createEmployee, authEmployee, verifyEmployee, getEmployees } = require('../../controllers/employee-controller');

// Declare the routes that point to the controllers above
router.route('/').post(createEmployee);
router.route('/').get(getEmployees);
router.route('/auth').post(authEmployee);
router.route('/verify').post(verifyEmployee);

module.exports = router;
