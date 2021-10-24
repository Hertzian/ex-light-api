const User = require('../database/models/user')
const bcrypt = require('bcryptjs')

//@route     POST /api/users/login
//@access    login
exports.login = async (req, res) => {}

//@route     POST /api/users/register
//@access    private
exports.register = async (req, res) => {
  const { email, password, role } = req.body
}

//@route     POST /api/users/
//@access    private
exports.create = async (req, res) => {
  const { email, password, role } = req.body
  try {
    const user = await User.create({ email, password, role })
    return res.json({ user })
  } catch (err) {
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
    const users = await User.find()
    return res.json({ users })
  } catch (err) {
    res.json({ err })
  }
}
