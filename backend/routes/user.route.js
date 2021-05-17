import express from 'express'
const router = express.Router()
import {
  getAllUsers,
  getUserById,
  getUserByuserName,
  getCurrentUser,
  createUser,
  updateUser,
  deleteUser,
  userLogin,
} from '../controllers/user.controller.js'
import { auth } from '../middleware/auth.middleware.js'
import { Role } from '../utils/userRoles.utils.js'
import { awaitHandlerFactory } from '../middleware/awaitHandlerFactory.middleware.js'

import {
  createUserSchema,
  updateUserSchema,
  validateLogin,
} from '../middleware/validators/userValidator.middleware.js'

router.get('/', auth(), awaitHandlerFactory(getAllUsers)) // localhost:3000/api/v1/users
router.get('/id/:id', auth(), awaitHandlerFactory(getUserById)) // localhost:3000/api/v1/users/id/1
router.get(
  '/username/:username',
  auth(),
  awaitHandlerFactory(getUserByuserName)
) // localhost:3000/api/v1/users/usersname/julia
router.get('/whoami', auth(), awaitHandlerFactory(getCurrentUser)) // localhost:3000/api/v1/users/whoami
router.post('/', createUserSchema, awaitHandlerFactory(createUser)) // localhost:3000/api/v1/users
router.patch(
  '/id/:id',
  auth(Role.Admin),
  updateUserSchema,
  awaitHandlerFactory(updateUser)
) // localhost:3000/api/v1/users/id/1 , using patch for partial update
router.delete('/id/:id', auth(Role.Admin), awaitHandlerFactory(deleteUser)) // localhost:3000/api/v1/users/id/1

router.post('/login', validateLogin, awaitHandlerFactory(userLogin)) // localhost:3000/api/v1/users/login

export default router
