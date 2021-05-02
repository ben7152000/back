const express = require('express')
const passport = require('passport')
const router = express.Router()

const multer = require('multer')
// const upload = multer({
//   limit: {
//     fileSize: 1000000
//   },
//   fileFilter (req, file, cb) {
//     if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
//       cb(new Error('Please upload an image'))
//     }
//     cb(null, true)
//   }
// })
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

const authenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next()
  }
  res.redirect('/signin')
}

router.get('/', (req, res) => res.redirect('/signin'))

router.get('/snorkeling', authenticated, adminController.getSnorekling)
router.post('/snorkeling', authenticated, upload.single('image'), adminController.postSnorekling)
router.get('/snorkeling/:id', authenticated, adminController.getSnorekling)
router.put('/snorkeling/:id', authenticated, upload.single('image'), adminController.putSnorekling)
router.delete('/snorkeling/:id', authenticated, adminController.deleteSnorekling)

router.get('/freediving', authenticated, adminController.getFreeDiving)
router.post('/freediving', authenticated, upload.single('image'), adminController.postFreeDiving)
router.get('/freediving/:id', authenticated, adminController.getFreeDiving)
router.put('/freediving/:id', authenticated, upload.single('image'), adminController.putFreeDiving)
router.delete('/freediving/:id', authenticated, adminController.deleteFreeDiving)

router.get('/signin', adminController.signInPage)
router.post('/signin', checkAccount, passport.authenticate('local', { failureRedirect: '/signin', failureFlash: true }), adminController.signIn)

router.get('/logout', adminController.logout)

module.exports = router
