const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcryptjs')
const db = require('../models')
const User = db.User

module.exports = app => {
  app.use(passport.initialize())
  app.use(passport.session())
  passport.use(new LocalStrategy({ usernameField: 'name', passReqToCallback: true },
    async (req, name, password, callback) => {
      try {
        const user = await User.findOne({ where: { name } })
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
          return callback(null, false, req.flash('error_messages', '帳號或密碼輸入錯誤'))
        }
        return callback(null, user)
      } catch (e) {
        callback(e, false)
      }
    }
  ))
  passport.serializeUser((user, callback) => {
    callback(null, user.id)
  })
  passport.deserializeUser(async (id, callback) => {
    try {
      const user = await User.findByPk(id)
      return callback(null, user)
    } catch (e) {
      callback(e, null)
    }
  })
}
