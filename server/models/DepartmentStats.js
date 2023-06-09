const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');
const { ObjectId } = require('mongoose').Types;

const departmentSchema = new Schema({
  monthlyEarnings: {
    type: Number,
  },
  monthlyCosts: {
    type: Number
  },

  projectedSales: {
    type: Number
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
});

departmentSchema.virtual('getEmployee').get(function() {
  return `Sales by: ${this.employeeId.fname} ${this.employeeId.lname}`
})


const DepartmentStats = model('DepartmentStats', departmentSchema);
module.exports = DepartmentStats;