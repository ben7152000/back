'use strict'
const bcrypt = require('bcryptjs')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [{
      name: 'admin',
      password: bcrypt.hashSync('password', bcrypt.genSaltSync(10), null),
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})

    // await queryInterface.bulkInsert('Snorkelings', [
    //   {
    //     id: '1',
    //     title: '一般蛙鏡',
    //     price: '70',
    //     image: 'http://localhost:8081/upload/一般蛙鏡 $70 有度蛙鏡 $100.png',
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    //   },
    //   {
    //     id: '2',
    //     title: '有度蛙鏡',
    //     price: '100',
    //     image: 'http://localhost:8081/upload/一般蛙鏡 $70 有度蛙鏡 $100.png',
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    //   },
    //   {
    //     id: '3',
    //     title: '泳鏡',
    //     price: '50',
    //     image: 'http://localhost:8081/upload/泳鏡 $50.jpg',
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    //   },
    //   {
    //     id: '4',
    //     title: '救生衣',
    //     price: '60',
    //     image: 'https://i.imgur.com/5pU8ljx.gif',
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    //   },
    //   {
    //     id: '5',
    //     title: '浮標',
    //     price: '60',
    //     image: 'https://i.imgur.com/hrPj1og.gif',
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    //   },
    //   {
    //     id: '6',
    //     title: '浮板',
    //     price: '60',
    //     image: 'https://i.imgur.com/NhMWRJw.gif',
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    //   },
    //   {
    //     id: '7',
    //     title: '救生圈',
    //     price: '60',
    //     image: 'https://i.imgur.com/vSl4GrU.jpg',
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    //   },
    //   {
    //     id: '8',
    //     title: '防滑鞋',
    //     price: '50',
    //     image: 'https://i.imgur.com/o7ZseCW.png',
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    //   },
    //   {
    //     id: '9',
    //     title: '套腳蛙鞋',
    //     price: '100',
    //     image: 'https://i.imgur.com/Piq0gKq.gif',
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    //   },
    //   {
    //     id: '10',
    //     title: '套鞋蛙鞋',
    //     price: '100',
    //     image: 'https://i.imgur.com/xBmx1AW.jpg',
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    //   },
    //   {
    //     id: '11',
    //     title: '水母上衣',
    //     price: '100',
    //     image: 'https://i.imgur.com/ZC1if4Q.png',
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    //   },
    //   {
    //     id: '12',
    //     title: '水母褲',
    //     price: '100',
    //     image: 'https://i.imgur.com/W11m3Ev.png',
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    //   },
    //   {
    //     id: '13',
    //     title: '防寒上衣',
    //     price: '130',
    //     image: 'https://i.imgur.com/IDasBHK.png',
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    //   },
    //   {
    //     id: '14',
    //     title: '防寒褲',
    //     price: '120',
    //     image: 'https://i.imgur.com/SB1xhjZ.png',
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    //   },
    //   {
    //     id: '15',
    //     title: '連身防寒衣',
    //     price: '150',
    //     image: 'https://i.imgur.com/PzuluuC.png',
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    //   },
    //   {
    //     id: '16',
    //     title: '水母上衣 防寒褲',
    //     price: '200',
    //     image: 'https://i.imgur.com/1hUMZqM.png',
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    //   },
    //   {
    //     id: '17',
    //     title: '水母衣褲',
    //     price: '160',
    //     image: 'https://i.imgur.com/1QiYtk1.png',
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    //   },
    //   {
    //     id: '18',
    //     title: '陽傘',
    //     price: '大500 小300',
    //     image: 'https://i.imgur.com/uKGV4qd.png',
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    //   }
    // ], {})

    // await queryInterface.bulkInsert('Freedivings', [
    //   {
    //     id: '1',
    //     title: '自潛面鏡(含呼吸管)',
    //     price: '100',
    //     image: 'https://i.imgur.com/Ud0I2MR.png',
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    //   },
    //   {
    //     id: '2',
    //     title: '自潛呼吸管',
    //     price: '40',
    //     image: 'https://i.imgur.com/ZWJcjwX.png',
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    //   },
    //   {
    //     id: '3',
    //     title: '中蛙鞋',
    //     price: '180',
    //     image: 'https://i.imgur.com/vJdTrvb.png',
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    //   },
    //   {
    //     id: '4',
    //     title: '長蛙鞋',
    //     price: '210',
    //     image: 'https://i.imgur.com/cal4j5T.png',
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    //   },
    //   {
    //     id: '5',
    //     title: '自潛防寒衣',
    //     price: '300',
    //     image: 'https://i.imgur.com/LwOLNkI.png',
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    //   },
    //   {
    //     id: '6',
    //     title: '安全繫繩',
    //     price: '100',
    //     image: 'https://i.imgur.com/3dHjgxh.png',
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    //   },
    //   {
    //     id: '7',
    //     title: '浮球一組(含導繩及底鉛)',
    //     price: '300',
    //     image: 'https://i.imgur.com/8XbF83c.jpg',
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    //   },
    //   {
    //     id: '8',
    //     title: '導繩',
    //     price: '80',
    //     image: 'https://i.imgur.com/CNDDvft.png',
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    //   },
    //   {
    //     id: '9',
    //     title: '底鉛',
    //     price: '70',
    //     image: 'https://i.imgur.com/WjLyypR.png',
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    //   },
    //   {
    //     id: '10',
    //     title: '鉛帶',
    //     price: '60',
    //     image: 'https://i.imgur.com/xuv0pQZ.png',
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    //   },
    //   {
    //     id: '11',
    //     title: '鉛塊',
    //     price: '20',
    //     image: 'https://i.imgur.com/TUtoyFm.png',
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    //   }
    // ], {})
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {})
    await queryInterface.bulkDelete('Snorkelings', null, {})
    await queryInterface.bulkDelete('Freedivings', null, {})
  }
}
