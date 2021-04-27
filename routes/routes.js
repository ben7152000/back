const express = require('express')
const passport = require('passport')
const router = express.Router()

const multer = require('multer')
const upload = multer({ dest: 'temp/' })

const adminController = require('../controllers/adminController')

const checkAccount = (req, res, next) => {
  const { name, password } = req.body
  if (!name && !password) {
    req.flash('error_messages', '請輸入帳號與密碼')
    return res.redirect('/signin')
  }
  if (!name) {
    req.flash('error_messages', '請輸入帳號')
    return res.redirect('/signin')
  }
  if (!password) {
    req.flash('error_messages', '請輸入密碼')
    return res.redirect('/signin')
  }
  return next()
}

router.get('/', (req, res) => res.redirect('/signin'))

router.get('/snorkeling', adminController.getSnorekling)
router.post('/snorkeling', upload.single('image'), adminController.postSnorekling)
router.get('/snorkeling/:id', adminController.getSnorekling)
router.put('/snorkeling/:id', upload.single('image'), adminController.putSnorekling)
router.delete('/snorkeling/:id', adminController.deleteSnorekling)

router.get('/freediving', adminController.getFreeDiving)
router.post('/freediving', upload.single('image'), adminController.postFreeDiving)
router.get('/freediving/:id', adminController.getFreeDiving)
router.put('/freediving/:id', upload.single('image'), adminController.putFreeDiving)
router.delete('/freediving/:id', adminController.deleteFreeDiving)

router.get('/signin', adminController.signInPage)
router.post('/signin', checkAccount, passport.authenticate('local', { failureRedirect: '/signin', failureFlash: true }), adminController.signIn)

router.get('/logout', adminController.logout)

module.exports = router
