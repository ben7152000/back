const express = require('express')
const router = express.Router()

const adminController = require('../controllers/api/adminController')

router.get('/snorkeling', adminController.getSnorekling)
router.get('/freediving', adminController.getFreeDiving)

module.exports = router
