const router = require('express').Router();

// Import any controllers needed here
const { createMeeting, getAllMeetings, getOneMeeting, updateOneMeeting, deleteOneMeeting } = require('../../controllers/meeting-controller');

// Declare the routes that point to the controllers above
router.route('/all/:userid').get(getAllMeetings);
router.route('/user/:userid').post(createMeeting);
router.route('/:id').get(getOneMeeting);
router.route('/:id').put(updateOneMeeting);
router.route('/:id').delete(deleteOneMeeting);

module.exports = router;
