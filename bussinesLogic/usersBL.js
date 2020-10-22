const jwt = require('jsonwebtoken')
const { SECRET } = require('../config/constants')
const UserModel = require('../models/userModel')

const auth = async (email, password) => {
    try {
        const query = { email, password }
        const user = await UserModel.findOne(query)
        if (user) {
            const payload = {
                userId: user.id, // _id
                name: user.name
            }
            const token = jwt.sign(payload, SECRET, { expiresIn: '10h' })
            return { status: 1, token: token }
        } else {
            return { status: 2 }
        }
    } catch (err) {
        return { status: 2 }
    }
}

const register = async (userData) => {
    try {
        const response = await UserModel(userData).save()
        return { status: 1, response }
    } catch (err) {
        return { status: 2, msg: 'Error saving document' }
    }
}

const autoAuth = async (userId) => {
    try {
        const userLogged = await UserModel.findById(userId)
        if (userLogged) {
            return { status: 1, user: userLogged }
        }
        return { status: 2, msg: 'user not found - 404' }
    } catch (err) {
        return { status: 2, msg: 'exception finding cat' }
    }
}

module.exports = {
    auth,
    register,
    autoAuth
}