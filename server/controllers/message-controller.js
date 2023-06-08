const { Message } = require('../models')

module.exports = {

  async createMessage({ body }, res) {
    console.log(body)
    try {
      if (!body) {
        res.status(401).json({ status: 'insufficient request' })
      } else {
        const message = await Message.create(body)

        res.status(200).json({status: 'success', payload: message})
      }
    } catch (err) {
      return res.status(400).json({ status: "error", msg: `Error creating message: ${err.message}` });
    }
  },

  async getMessages(req, res) {
    try {
      const allMessages = await Message.find().populate('Employee')
      // const allMessages = await messages.forEach(message => message.populate('Employee'))

      res.status(200).json({status: 'success', payload: allMessages})
    } catch (err) {
      return res.status(400).json({ status: "error", msg: `Error finding messages: ${err.message}` });
    }
  }
}