const bcryptjs = require('bcryptjs')
const users = require('../models/users-model')
require('dotenv').config()
const jsonwebtoken = require('jsonwebtoken')

exports.register = async (req, res, next) => {
  const { name, username, email, password } = req.body
  const hashPassword = await bcryptjs.hash(password, 10)
  const emailUser = await users.findOne({ email: email })
  const usernameUser = await users.findOne({ username: username })
  if (emailUser) {
    return res.status(404).json({
      status: false,
      message: 'email sudah tersedia'
    })
  } else if (usernameUser) {
    return res.status(404).json({
      status: false,
      message: 'username sudah terpakai'
    })
  }


  const user = new users({
    name: name,
    username: username,
    email: email,
    password: hashPassword

  })

  user.save()
    .then(result => {
      res.status(201).json({
        message: 'Congratulations , your account has been successfully created.',
        data: result
      })
    })
    .catch(err => {
      console.log(err)
    })
}

exports.login = async (req, res, next) => {
  const { username, password } = req.body
  const dataUser = await users.findOne({ $or: [{ username: username }, { email: username }] })
  if (dataUser) {
    // jika usernamenya ada
    const passwordUser = await bcryptjs.compare(password, dataUser.password)
    if (passwordUser) {
      const data = {
        id: dataUser._id,
        name: dataUser.name
      }
      const token = await jsonwebtoken.sign(data, process.env.JWT_SECRET)
      return res.status(200).json({
        message: 'Login success',
        token: token,
        data: data
      })
    } else {
      return res.status(404).json({
        message: 'Incorrect username or password'
      })
    }
  }
}