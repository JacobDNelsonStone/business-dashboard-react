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

  employees: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Employee'
    }
  ]
},
  {
    toJSON:
    {
      virtuals: true,
    },
    id: false,
  });


const Meeting = model('Meeting', meetingSchema);
module.exports = Meeting;
