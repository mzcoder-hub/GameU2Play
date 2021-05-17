import { find, findOne, create, deleteUserData } from '../models/user.model.js'
import { HttpException } from '../utils/HttpException.utils.js'
import { validationResult } from 'express-validator'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

/******************************************************************************
 *                              User Controller
 ******************************************************************************/

const checkValidation = (req) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    throw new HttpException(400, 'Validation faild', errors)
  }
}

// hash password if it exists
const hashPassword = async (req) => {
  if (req.body.password) {
    req.body.password = await bcrypt.hash(req.body.password, 8)
  }
}

const getAllUsers = async (req, res, next) => {
  let userList = await find()
  if (!userList.length) {
    throw new HttpException(404, 'Users not found')
  }

  userList = userList.map((user) => {
    const { password, ...userWithoutPassword } = user
    return userWithoutPassword
  })

  res.send(userList)
}

const getUserById = async (req, res, next) => {
  const user = await findOne({ id: req.params.id })
  if (!user) {
    throw new HttpException(404, 'User not found')
  }

  const { password, ...userWithoutPassword } = user

  res.send(userWithoutPassword)
}

const getUserByuserName = async (req, res, next) => {
  const user = await findOne({ username: req.params.username })
  if (!user) {
    throw new HttpException(404, 'User not found')
  }

  const { password, ...userWithoutPassword } = user

  res.send(userWithoutPassword)
}

const getCurrentUser = async (req, res, next) => {
  const { password, ...userWithoutPassword } = req.currentUser

  res.send(userWithoutPassword)
}

const createUser = async (req, res, next) => {
  checkValidation(req)

  await hashPassword(req)

  const result = await create(req.body)

  if (!result) {
    throw new HttpException(500, 'Something went wrong')
  }

  res.status(201).send('User was created!')
}

const updateUser = async (req, res, next) => {
  checkValidation(req)

  await hashPassword(req)

  const { confirm_password, ...restOfUpdates } = req.body

  // do the update query and get the result
  // it can be partial edit
  const result = await update(restOfUpdates, req.params.id)

  if (!result) {
    throw new HttpException(404, 'Something went wrong')
  }

  const { affectedRows, changedRows, info } = result

  const message = !affectedRows
    ? 'User not found'
    : affectedRows && changedRows
    ? 'User updated successfully'
    : 'Updated faild'

  res.send({ message, info })
}

const deleteUser = async (req, res, next) => {
  const result = await deleteUserData(req.params.id)
  if (!result) {
    throw new HttpException(404, 'User not found')
  }
  res.send('User has been deleted')
}

const userLogin = async (req, res, next) => {
  checkValidation(req)

  const { email, password: pass } = req.body

  const user = await findOne({ email })

  if (!user) {
    throw new HttpException(401, 'Unable to login!')
  }

  const isMatch = await bcrypt.compare(pass, user.password)

  if (!isMatch) {
    throw new HttpException(401, 'Incorrect password!')
  }

  // user matched!
  const secretKey = process.env.SECRET_JWT || ''
  const token = jwt.sign({ user_id: user.id.toString() }, secretKey, {
    expiresIn: '24h',
  })

  const { password, ...userWithoutPassword } = user

  res.send({ ...userWithoutPassword, token })
}

/******************************************************************************
 *                               Export
 ******************************************************************************/
export {
  getAllUsers,
  getUserById,
  getUserByuserName,
  getCurrentUser,
  createUser,
  updateUser,
  deleteUser,
  userLogin,
  checkValidation,
  hashPassword,
}
