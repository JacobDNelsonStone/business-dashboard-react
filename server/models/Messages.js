const { Schema, model } = require('mongoose');

const messageSchema = new Schema({
  messageText: {
    type: String,
    required: true
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  },
  employeeId: {
    type: Schema.Types.ObjectId,
    ref: 'Employee'
  }
},
{
  toJSON: {
    getters: true,
  },
  id: false,
}
);

const Message = model('Message', messageSchema);
module.exports = Message;
