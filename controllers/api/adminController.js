const adminService = require('../../services/adminService')

const adminController = {
  getSnorekling: (req, res) => {
    adminService.getSnorekling(req, res, (data) => {
      return res.json(data)
    })
  },
  getFreeDiving: (req, res) => {
    adminService.getFreeDiving(req, res, (data) => {
      return res.json(data)
    })
  }
}

module.exports = adminController
