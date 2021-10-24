const { User } = require('../database/models/index')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

//@route     POST /api/users/login
//@access    public
exports.login = async (req, res) => {
  //const { email, password } = req.body
  try {
  } catch (err) {
    return res.json({ err })
  }
}

//@route     POST /api/users/register
//@access    public
exports.register = async (req, res) => {
  const { email, password, role } = req.body
  const newPassword = hashing(password)
  try {
    const user = await User.create({ email, password: newPassword, role })
    return res.json({ user })
  } catch (err) {
    return res.json({ err })
  }
}

//@route     POST /api/users/
//@access    private
exports.create = async (req, res) => {
  const { email, password, role } = req.body
  const newPassword = hashing(password)
  try {
    const user = await User.create({ email, password: newPassword, role })
    //return res.json({ ijole: 'no jala' })
    return res.json({ user })
  } catch (err) {
    console.log(err)
    return res.json({ err })
  }
}

//@route     PUT /api/users/:userId
//@access    private
exports.update = async (req, res) => {
  const userId = req.params.userId
  const { email, password, role } = req.body
  try {
    let user = await User.findOne({ where: { id: userId } })
    user.email = email || user.email
    user.password = password || user.password
    user.role = role || user.role
    await user.save()
    return res.json({ user })
  } catch (err) {
    return res.json({ err })
  }
}

//@route     GET /api/users/:userId
//@access    private
exports.getUser = async (req, res) => {
  const userId = req.params.userId
  try {
    const user = await User.findOne({ where: { id: userId } })
    return res.json({ user })
  } catch (err) {
    return res.json({ err })
  }
}

//@route     GET /api/users/
//@access    private
exports.getAll = async (req, res) => {
  try {
    const users = await User.findAll()
    console.log(users)
    return res.json({ users })
  } catch (err) {
    console.log(err)
    return res.json({ err })
  }
}

const hashing = (toHash) => {
  const salt = bcrypt.genSaltSync(10)
  const hashed = bcrypt.hashSync(toHash, salt)
  return hashed
}
