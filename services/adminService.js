const db = require('../models')
const { Snorkeling, Freediving } = db

const adminService = {
  getSnorekling: async (req, res, callback) => {
    const id = req.params.id
    try {
      const snorkelings = await Snorkeling.findAll({ raw: true, nest: true })
      if (id) {
        const snorkeling = await Snorkeling.findByPk(id)
        return res.render('snorkeling', { snorkelings, snorkeling: snorkeling.toJSON() })
      }
      return callback({ snorkelings })
    } catch (e) {
      console.log(e)
    }
  },
  getFreeDiving: async (req, res, callback) => {
    const id = req.params.id
    try {
      const freedivings = await Freediving.findAll({ raw: true, nest: true })
      if (id) {
        const freediving = await Freediving.findByPk(id)
        console.log(freediving.toJSON().image)
        return res.render('freediving', { freedivings, freediving: freediving.toJSON() })
      }
      return callback({ freedivings })
    } catch (e) {
      console.log(e)
    }
  }
}

module.exports = adminService
