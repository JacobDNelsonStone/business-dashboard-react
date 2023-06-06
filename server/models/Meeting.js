const { Schema, model } = require('mongoose');

const meetingSchema = new Schema({
  meetingTopic: { 
    type: String, 
    required: true 
  },

  meetingDate: {
    type: String,
    required: true
  },

  employees: {
    ref: {
      type: Schema.Types.ObjectId,
      ref: 'Employee'
    }
  }

});


const Meeting = model('Meeting', meetingSchema);
module.exports = Meeting;
