const db = require('../models')
const { Snorkeling, Freediving } = db
const fs = require('fs')
const adminService = require('../services/adminService')

const adminController = {
  signInPage: (req, res) => {
    return res.render('signin', { layout: 'mainLoginIn' })
  },
  signIn: (req, res) => {
    req.flash('success_messages', '成功登入！')
    return res.redirect('/snorkeling')
  },
  logout: (req, res) => {
    req.flash('success_messages', '登出成功！')
    req.logout()
    return res.redirect('/signin')
  },
  getSnorekling: (req, res) => {
    adminService.getSnorekling(req, res, (data) => {
      return res.render('snorkeling', data)
    })
  },
  postSnorekling: (req, res) => {
    const { title, price } = req.body
    const { file } = req
    if (!title || !price) {
      req.flash('error_messages', '請填入名稱或價格')
      return res.redirect('/snorkeling')
    }
    if (file) {
      fs.readFile(file.path, (err, data) => {
        fs.writeFile(`upload/${file.originalname}`, data, () => {
          return Snorkeling.create({
            title,
            price,
            image: `http://localhost:8081/upload/${file.originalname}`
          }).then(() => {
            req.flash('success_messages', '裝備建立成功')
            return res.redirect('/snorkeling')
          })
        })
      })
    } else {
      return Snorkeling.create({
        title,
        price,
        image: null
      }).then(() => {
        req.flash('success_messages', '裝備建立成功')
        return res.redirect('/snorkeling')
      })
    }
  },
  putSnorekling: (req, res) => {
    const { title, price } = req.body
    const { file } = req
    const id = req.params.id
    if (!title || !price) {
      req.flash('error_messages', '請填入名稱或價格')
      return res.redirect('/snorkeling')
    }
    if (file) {
      fs.readFile(file.path, (err, data) => {
        fs.writeFile(`upload/${file.originalname}`, data, () => {
          return Snorkeling.findByPk(id)
            .then((snorkeling) => {
              snorkeling.update({
                title,
                price,
                image: `http://localhost:8081/upload/${file.originalname}`
              })
            })
            .then(() => {
              req.flash('success_messages', '裝備更新成功')
              return res.redirect('/snorkeling')
            })
        })
      })
    } else {
      return Snorkeling.findByPk(id)
        .then((snorkeling) => {
          snorkeling.update({
            title,
            price,
            image: snorkeling.image
          })
        })
        .then(() => {
          req.flash('success_messages', '裝備更新成功')
          return res.redirect('/snorkeling')
        })
    }
  },
  deleteSnorekling: async (req, res) => {
    const id = req.params.id
    try {
      const snorkeling = await Snorkeling.findByPk(id)
      snorkeling.destroy()
      return res.redirect('/snorkeling')
    } catch (e) {
      console.log(e)
    }
  },
  getFreeDiving: (req, res) => {
    adminService.getFreeDiving(req, res, (data) => {
      return res.render('freediving', data)
    })
  },
  postFreeDiving: (req, res) => {
    const { title, price } = req.body
    const { file } = req
    if (!title || !price) {
      req.flash('error_messages', '請填入名稱或價格')
      return res.redirect('/freediving')
    }
    if (file) {
      fs.readFile(file.path, (err, data) => {
        fs.writeFile(`upload/${file.originalname}`, data, () => {
          return Freediving.create({
            title,
            price,
            image: `http://localhost:8081/upload/${file.originalname}`
          }).then(() => {
            req.flash('success_messages', '裝備建立成功')
            return res.redirect('/freediving')
          })
        })
      })
    } else {
      return Freediving.create({
        title,
        price,
        image: null
      }).then(() => {
        req.flash('success_messages', '裝備建立成功')
        return res.redirect('/freediving')
      })
    }
    // if (file) {
    //   imgur.setClientID(IMGUR_CLIENT_ID)
    //   imgur.upload(file.path, (err, img) => {
    //     return Freediving.create({
    //       title,
    //       price,
    //       image: img.data.link
    //     }).then(() => {
    //       req.flash('success_messages', '裝備建立成功')
    //       return res.redirect('/freediving')
    //     })
    //   })
    // } else {
    //   return Freediving.create({
    //     title,
    //     price,
    //     image: null
    //   }).then(() => {
    //     req.flash('success_messages', '裝備建立成功')
    //     return res.redirect('/freediving')
    //   })
    // }
  },
  putFreeDiving: (req, res) => {
    const { title, price } = req.body
    const { file } = req
    const id = req.params.id
    if (!title || !price) {
      req.flash('error_messages', '請填入名稱或價格')
      return res.redirect('/freediving')
    }
    if (file) {
      fs.readFile(file.path, (err, data) => {
        fs.writeFile(`upload/${file.originalname}`, data, () => {
          return Freediving.findByPk(id)
            .then((freediving) => {
              freediving.update({
                title,
                price,
                image: `http://localhost:8081/upload/${file.originalname}`
              })
            })
            .then(() => {
              req.flash('success_messages', '裝備更新成功')
              return res.redirect('/freediving')
            })
        })
      })
    } else {
      return Freediving.findByPk(id)
        .then((freediving) => {
          freediving.update({
            title,
            price,
            image: freediving.image
          })
        })
        .then(() => {
          req.flash('success_messages', '裝備更新成功')
          return res.redirect('/freediving')
        })
    }
  },
  deleteFreeDiving: async (req, res) => {
    const id = req.params.id
    try {
      const freediving = await Freediving.findByPk(id)
      freediving.destroy()
      return res.redirect('/freediving')
    } catch (e) {
      console.log(e)
    }
  }
}

module.exports = adminController
