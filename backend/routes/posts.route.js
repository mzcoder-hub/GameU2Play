import express from 'express'
const router = express.Router()

import { auth } from '../middleware/auth.middleware.js'
import { awaitHandlerFactory } from '../middleware/awaitHandlerFactory.middleware.js'
import {
  createPost,
  updatePost,
  deletePost,
  getAllPosts,
  getPostById,
} from '../controllers/posts.controller.js'

import {
  createPostValidation,
  updatePostValidation,
} from '../middleware/validators/postValidator.middleware.js'

import { Role } from '../utils/userRoles.utils.js'

router.post(
  '/',
  auth(Role.SuperAdmin, Role.Admin),
  createPostValidation,
  awaitHandlerFactory(createPost)
)

router.get('/id/:id', awaitHandlerFactory(getPostById))

router.patch(
  '/id/:id',
  auth(Role.SuperAdmin, Role.Admin),
  updatePostValidation,
  awaitHandlerFactory(updatePost)
) // localhost:3000/api/v1/posts/id/1 , using patch for partial UPDATE Posts

router.delete(
  '/id/:id',
  auth(Role.SuperAdmin, Role.Admin),
  awaitHandlerFactory(deletePost)
) // localhost:3000/api/v1/posts/id/1 DELETE Posts (ADMIN ONLY)

router.get('/', awaitHandlerFactory(getAllPosts)) // localhost:3000/api/v1/posts GET ALL Posts

export default router
