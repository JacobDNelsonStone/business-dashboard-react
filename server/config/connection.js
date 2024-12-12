const mongoose = require("mongoose");
require("dotenv").config()

console.log("+++++++++++===========" + process.env.MONGODB_URI)
//  "mongodb://127.0.0.1:27017/business-dashboard",
mongoose.connect('mongodb+srv://jacobdnelsonstone:EBw6wMxqkujPfrEv@cluster1.cp8y2xq.mongodb.net/business-dashboard?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
