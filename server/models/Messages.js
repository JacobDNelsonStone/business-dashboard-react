const { Schema, model } = require('mongoose');

const messageSchema = new Schema({
  messageText: {
    type: String,
    required: true
  },
  employeeId: {
    type: Schema.Types.ObjectId,
    ref: 'Employee'
  }
});

const Message = model('Message', messageSchema);
module.exports = Message;
