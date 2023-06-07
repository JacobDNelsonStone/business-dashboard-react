const { Meeting } = require('../models');

// FYI: The user's password is encrypted at the model level

module.exports = {
  
  async createMeeting({ body, params }, res) {
    try {
      const meeting = await Meeting.create({ item: body.item, userId: params.userid })
      return res.status(200).json({ status: "success", payload: meeting})
    } catch(err){
      return res.status(400).json({ status: "error", msg: `Error creating meeting Item: ${err.message}` })
    }
  },


  async getAllMeetings({ body, params }, res) {
    try {
      const meetings = await Meeting.find()
      console.log(meetings)
      return res.status(200).json({ status: "success", payload: meetings })
    } catch(err){
      console.log(err.message)
      return res.status(400).json({ status: "error", msg: `Error retrieving meeting Items: ${err.message}` })
    }
  },


  async getOneMeeting({ params }, res) {
    try {
      const meeting = await Meeting.findOne({ _id: params.id })
      return res.status(200).json({ status: "success", payload: meeting })
    } catch(err){
      return res.status(400).json({ status: "error", msg: `Error retrieving meeting Item: ${err.message}` })
    }
  },

  async updateOneMeeting({ body, params }, res) {
    try {
      const meeting = await Meeting.findOneAndUpdate({ _id: params.id }, { item: body.item }, { new: true })
      return res.status(200).json({ status: "success", payload: meeting })
    } catch(err){
      console.log(err.message)
      return res.status(400).json({ status: "error", msg: `Error updating meeting Item: ${err.message}` })
    }
  },


  async deleteOneMeeting({ params }, res) {
    try {
      const meeting = await Meeting.findOneAndRemove({ _id: params.id })
      return res.status(200).json({ status: "success", payload: meeting })
    } catch(err){
      return res.status(400).json({ status: "error", msg: `Error removing meeting Item: ${err.message}` })
    }
  },

};
