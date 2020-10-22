const { 
    auth,
    register,
    autoAuth
} = require('../bussinesLogic/usersBL')

const login = async (req, res) => {
  const { email, password } = req.body
  const response = await auth(email, password)
  res.json(response)
}

const signup = async (req, res) => {
  const user = req.body
  const response = await register(user)
  res.json(response)
}

const autologin = async(req, res) => {
  const { userId } = req.query
  const response = await autoAuth(userId)
  res.json(response)
}

module.exports = {
    login,
    signup,
    autologin
  }