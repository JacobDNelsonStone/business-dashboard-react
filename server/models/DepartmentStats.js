const { Schema, model } = require('mongoose');

const departmentSchema = new Schema({
  monthlyEarnings: {
    type: String,
  },

  monthlyCosts: {
    type: String
  },

  projectedSales: {
    type: String
  },

  newSale: {
    ref: {
      type: Schema.Types.ObjectId,
      model: "Employee"
    }
  }
});


const DepartmentStats = model('DepartmentStats', departmentSchema);
module.exports = DepartmentStats;