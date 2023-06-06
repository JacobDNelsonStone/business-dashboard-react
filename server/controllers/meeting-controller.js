const { Meeting } = require('../node_modules');

// FYI: The user's password is encrypted at the model level

module.exports = {
  
  async createToDo({ body, params }, res) {
    try {
      const todo = await Meeting.create({ item: body.item, userId: params.userid })
      return res.status(200).json({ status: "success", payload: todo})
    } catch(err){
      return res.status(400).json({ status: "error", msg: `Error creating ToDo Item: ${err.message}` })
    }
  },


  async getAllToDos({ body, params }, res) {
    try {
      const todos = await Meeting.find({ userId: params.userid })
      return res.status(200).json({ status: "success", payload: todos })
    } catch(err){
      console.log(err.message)
      return res.status(400).json({ status: "error", msg: `Error retrieving ToDo Items: ${err.message}` })
    }
  },


  async getOneToDo({ params }, res) {
    try {
      const todo = await Meeting.findOne({ _id: params.id })
      return res.status(200).json({ status: "success", payload: todo })
    } catch(err){
      return res.status(400).json({ status: "error", msg: `Error retrieving ToDo Item: ${err.message}` })
    }
  },

  async updateOneToDo({ body, params }, res) {
    try {
      const todo = await Meeting.findOneAndUpdate({ _id: params.id }, { item: body.item }, { new: true })
      return res.status(200).json({ status: "success", payload: todo })
    } catch(err){
      console.log(err.message)
      return res.status(400).json({ status: "error", msg: `Error updating ToDo Item: ${err.message}` })
    }
  },


  async deleteOneToDo({ params }, res) {
    try {
      const todo = await Meeting.findOneAndRemove({ _id: params.id })
      return res.status(200).json({ status: "success", payload: todo })
    } catch(err){
      return res.status(400).json({ status: "error", msg: `Error removing ToDo Item: ${err.message}` })
    }
  },

};
