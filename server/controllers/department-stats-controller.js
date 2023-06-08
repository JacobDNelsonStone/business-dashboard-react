const { DepartmentStats } = require('../models')

module.exports = {

  async createDepartmentStats({ body }, res) {
    console.log(body);
    try {
      if (!body) {
        res.status(401).json({ status: 'insufficient request' });
      } else {
        const stats = await DepartmentStats.create(body);

        res.status(200).json({status: 'success', payload: stats});
      }
    } catch (err) {
      return res.status(400).json({ status: "error", msg: `Error creating message: ${err.message}` });
    }
  },

  async getDepartmentStats(req, res) {
    try {
      const allStats = await DepartmentStats.find().populate('employeeId');
      // const allMessages = await messages.forEach(message => message.populate('Employee'))

      res.status(200).json({status: 'success', payload: allStats});
    } catch (err) {
      return res.status(400).json({ status: "error", msg: `Error finding stats: ${err.message}` });
    }
  }
}