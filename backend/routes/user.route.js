import express from 'express'
const router = express.Router()
import {
  getAllUsers,
  getUserById,
  getCurrentUser,
  createUser,
  updateUser,
  deleteUser,
  userLogin,
  verification,
} from '../controllers/user.controller.js'
import { auth } from '../middleware/auth.middleware.js'
import { Role } from '../utils/userRoles.utils.js'
import { awaitHandlerFactory } from '../middleware/awaitHandlerFactory.middleware.js'

import {
  createUserSchema,
  updateUserSchema,
  validateLogin,
  validateVerification,
} from '../middleware/validators/userValidator.middleware.js'

router.post('/', createUserSchema, awaitHandlerFactory(createUser)) // localhost:3000/api/v1/users . CREATE USER
router.post('/login', validateLogin, awaitHandlerFactory(userLogin)) // localhost:3000/api/v1/users/login, LOGIN USER
router.post(
  '/verification/:id',
  auth(Role.User),
  validateVerification,
  awaitHandlerFactory(verification)
) // localhost:3000/api/v1/users/verification, USER Verification Send
router.patch(
  '/id/:id',
  auth(Role.Admin),
  updateUserSchema,
  awaitHandlerFactory(updateUser)
) // localhost:3000/api/v1/users/id/1 , using patch for partial UPDATE USER

router.delete('/id/:id', auth(Role.SuperAdmin), awaitHandlerFactory(deleteUser)) // localhost:3000/api/v1/users/id/1 DELETE USER (ADMIN ONLY)

router.get('/', auth(Role.Admin), awaitHandlerFactory(getAllUsers)) // localhost:3000/api/v1/users GET ALL USER (ADMIN ONLY)
router.get('/id/:id', auth(Role.Admin), awaitHandlerFactory(getUserById)) // localhost:3000/api/v1/users/id/1 GET USER BY ID
// router.get(
//   '/nickname/:nickname',
//   auth(),
//   awaitHandlerFactory(getUserByNickName)
// ) // localhost:3000/api/v1/users/usersname/julia
router.get('/whoami', auth(), awaitHandlerFactory(getCurrentUser)) // localhost:3000/api/v1/users/whoami

export default router
