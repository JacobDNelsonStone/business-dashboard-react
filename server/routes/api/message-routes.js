const router = require('express').Router();

// Import any controllers needed here
const { createMessage, getMessages } = require('../../controllers/message-controller');

// Declare the routes that point to the controllers above
router.route('/').post(createMessage);
router.route('/').get(getMessages);


module.exports = router;