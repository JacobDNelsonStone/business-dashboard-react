const { Employee } = require('../models');
const jwt = require("jsonwebtoken");
require("dotenv").config()

// FYI: The employee's password is encrypted at the model level

module.exports = {
  
  async createEmployee({ body }, res) {
    console.log({body})
    try{
      const employee = await Employee.create(body);
      const { password, ...modifiedEmployee } = employee;

      const token = jwt.sign({
        email: employee.email,
        id: employee._id
      }, process.env.JWT_SECRET)
  
      res.cookie("auth-cookie", token).json({ status: "success", payload: modifiedEmployee })
    } catch(err){
      return res.status(400).json({ status: "error", msg: `Error creating employee: ${err.message}` });
    }
  },


  async authEmployee({ body }, res) {
    let employee
    console.log({body})
    try {
      employee = await Employee.findOne({ email: body.email});
    } catch(err){
      return res.status(400).json({ message: 'Unable to authenticate employee' });
    }
    if (!employee) return res.status(400).json({ message: 'Unable to authenticate employee' });

    const isValid = await employee.verify(body.password)
    if( !isValid ) return res.status(400).json({ message: 'Unable to authenticate employee' });

    const token = jwt.sign({
      email: employee.email,
      id: employee._id
    }, process.env.JWT_SECRET)

    const { password, ...modifiedEmployee } = employee;
    res.cookie("auth-cookie", token).json({ status: "success", payload: modifiedEmployee })
  },


  async verifyEmployee(req, res){
    const cookie = req.cookies["auth-cookie"]
    if( !cookie ) return res.status(401).json({msg: "un-authorized"})

    const isVerified = jwt.verify(cookie, process.env.JWT_SECRET)
    if( !isVerified ) return res.status(401).json({msg: "un-authorized"})

    const employee = await Employee.findOne({ _id: isVerified.id }).select("-password")
    if( !employee ) return res.status(401).json({msg: "authorized"})
    
    return res.status(200).json({ status: "success", payload: employee })
  }

};
