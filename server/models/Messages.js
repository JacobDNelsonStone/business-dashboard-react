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
  toJSON: 
  {
    virtuals: true,
  },
  id: false,
}
);

messageSchema.virtual('getEmployeeName').get(function() {
  return `${this.employeeId.fname} ${this.employeeId.lname}`
})


const Message = model('Message', messageSchema);
module.exports = Message;
