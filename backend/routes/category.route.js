import express from 'express'
const router = express.Router()

import { auth } from '../middleware/auth.middleware.js'
import { awaitHandlerFactory } from '../middleware/awaitHandlerFactory.middleware.js'
import {
  createCategory,
  updateCat,
  deleteCat,
  getAllCategory,
} from '../controllers/category.controller.js'

import {
  createCategoryValidation,
  updateCatValidation,
} from '../middleware/validators/categoryValidator.middleware.js'

import { Role } from '../utils/userRoles.utils.js'

router.post(
  '/',
  auth(Role.Admin),
  createCategoryValidation,
  awaitHandlerFactory(createCategory)
)

router.patch(
  '/id/:id',
  auth(Role.Admin),
  updateCatValidation,
  awaitHandlerFactory(updateCat)
) // localhost:3000/api/v1/posts/id/1 , using patch for partial UPDATE Posts

router.delete('/id/:id', auth(Role.Admin), awaitHandlerFactory(deleteCat)) // localhost:3000/api/v1/posts/id/1 DELETE Posts (ADMIN ONLY)

router.get('/', auth(), awaitHandlerFactory(getAllCategory)) // localhost:3000/api/v1/posts GET ALL Posts

export default router
