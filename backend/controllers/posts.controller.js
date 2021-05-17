import { validationResult } from 'express-validator'
import dotenv from 'dotenv'
dotenv.config()

import { create, update, deletePostData, find } from '../models/posts.model.js'
import { HttpException } from '../utils/HttpException.utils.js'

/******************************************************************************
 *                              Post Controller                               *
 ******************************************************************************/

const checkValidation = (req) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    throw new HttpException(400, 'Validation faild', errors)
  }
}

const createPost = async (req, res, next) => {
  checkValidation(req.body)

  await hashPassword(req)

  const result = await create(req.body)

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

/******************************************************************************
 *                               Export                                       *
 ******************************************************************************/

export { createPost, updatePost, deletePost, getAllPosts }
