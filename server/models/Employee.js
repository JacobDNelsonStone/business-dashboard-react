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
    unique: [true, "Email is already registered."], // makes sure that emails aren't reused
    validate: { // Checks if email is in email format. Else, return error message.
      validator: function(input) {
        return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(input);
      },
      message: "Not a valid email",
    },
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
