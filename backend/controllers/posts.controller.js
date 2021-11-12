import { validationResult } from 'express-validator'
import dotenv from 'dotenv'
dotenv.config()

import {
  create,
  update,
  deletePostData,
  find,
  findOne,
} from '../models/posts.model.js'
import { HttpException } from '../utils/HttpException.utils.js'

/******************************************************************************
 *                              Post Controller                               *
 ******************************************************************************/

const checkValidation = (req) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    throw new HttpException(400, 'Validation failed', errors)
  }
}

const createPost = async (req, res, next) => {
  // console.log(req.body)
  checkValidation(req.body)

  const result = await create(req.body)
  // console.log(result)
  if (!result) {
    throw new HttpException(500, 'Something went wrong')
  }

  res.status(201).send('Post was created!')
}

const updatePost = async (req, res, next) => {
  checkValidation(req)

  // do the update query and get the result
  // it can be partial edit
  const result = await update(req.body, req.params.id)

  if (!result) {
    throw new HttpException(404, 'Something went wrong')
  }

  const { affectedRows, changedRows, info } = result

  const message = !affectedRows
    ? 'Post not found'
    : affectedRows && changedRows
    ? 'Post updated successfully'
    : 'Updated failed'

  res.send({ message, info })
}

const deletePost = async (req, res, next) => {
  const result = await deletePostData(req.params.id)
  if (!result) {
    throw new HttpException(404, 'Post not found')
  }
  res.send('Post has been deleted')
}

const getAllPosts = async (req, res, next) => {
  let postList = await find()

  if (!postList.length) {
    throw new HttpException(404, 'Posts not found')
  }

  postList = postList.map((post) => {
    return post
  })

  res.send(postList)
}

const getPostById = async (req, res, next) => {
  // console.log(req.params.id)
  let post = await findOne({ post_id: req.params.id })
  // console.log(Object.keys(post).length)
  if (Object.keys(post).length === 0) {
    throw new HttpException(404, 'Posts not found')
  }

  res.send(post)
}

const getPostBySlug = async (req, res, next) => {
  // console.log(req.params.id)
  let post = await findOne({ slug: req.params.slug })
  // console.log(Object.keys(post).length)
  if (Object.keys(post).length === 0) {
    throw new HttpException(404, 'Posts not found')
  }

  res.send(post)
}

/******************************************************************************
 *                               Export                                       *
 ******************************************************************************/

export {
  createPost,
  updatePost,
  deletePost,
  getAllPosts,
  getPostById,
  getPostBySlug,
}
