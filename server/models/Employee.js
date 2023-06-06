const { Schema, model } = require('mongoose');
const bcrypt = require("bcrypt")

const employeeSchema = new Schema({
  fname: { 
    type: String, 
    required: true 
  },

  lname: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true
  }
});

employeeSchema.method("verify", async function(pw){
  return await bcrypt.compare(pw, this.password)
})

employeeSchema.pre("save", async function(next){
  this.password = await bcrypt.hash(this.password, 10)
})

const Employee = model('Employee', employeeSchema);

module.exports = Employee;
