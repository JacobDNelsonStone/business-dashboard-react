const { Meeting } = require('../models');

// FYI: The user's password is encrypted at the model level

module.exports = {

  async createMeeting({ body, params }, res) {
    console.log('seen')
    try {
      const meeting = await Meeting.create(
        {
          meetingTopic: body.meetingTopic,
          meetingDate: body.meetingDate,
          employees: body.employees
        })
      return res.status(200).json({ status: "success", payload: meeting })
    } catch (err) {
      return res.status(400).json({ status: "error", msg: `Error creating meeting: ${err.message}` })
    }
  },


  async getAllMeetings({ body, params }, res) {
    try {
      const meetings = await Meeting.find().populate('employees')
      // console.log(meetings)
      return res.status(200).json({ status: "success", payload: meetings })
    } catch (err) {
      console.log(err.message)
      return res.status(400).json({ status: "error", msg: `Error retrieving meetings: ${err.message}` })
    }
  },


  async getOneMeeting({ params }, res) {
    try {
      const meeting = await Meeting.findOne({ _id: params.id })
      return res.status(200).json({ status: "success", payload: meeting })
    } catch (err) {
      return res.status(400).json({ status: "error", msg: `Error retrieving meeting Item: ${err.message}` })
    }
  },

  async updateOneMeeting({ body, params }, res) {
    try {
      const meeting = await Meeting.findOneAndUpdate({ _id: params.id }, { body }, { new: true })
      return res.status(200).json({ status: "success", payload: meeting })
    } catch (err) {
      console.log(err.message)
      return res.status(400).json({ status: "error", msg: `Error updating meeting Item: ${err.message}` })
    }
  },


  async deleteOneMeeting({ params }, res) {
    try {
      const meeting = await Meeting.findOneAndRemove({ _id: params.id })
      return res.status(200).json({ status: "success", payload: meeting })
    } catch (err) {
      return res.status(400).json({ status: "error", msg: `Error removing meeting Item: ${err.message}` })
    }
  },

};
