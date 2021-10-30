import { validationResult } from 'express-validator'
import dotenv from 'dotenv'
dotenv.config()

import {
  create,
  update,
  deleteCatData,
  find,
  findOne,
} from '../models/category.model.js'
import { HttpException } from '../utils/HttpException.utils.js'

/******************************************************************************
 *                              Category Controller                               *
 ******************************************************************************/

const checkValidation = (req) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    throw new HttpException(400, 'Validation faild', errors)
  }
}

const createCategory = async (req, res, next) => {
  checkValidation(req.body)

  const result = await create(req.body)

  if (!result) {
    throw new HttpException(500, 'Something went wrong')
  }

  res.status(201).send('Category was created!')
}

const updateCat = async (req, res, next) => {
  // console.log(req.body)
  checkValidation(req.body)

  // do the update query and get the result
  // it can be partial edit
  const result = await update(req.body, req.params.id)

  if (!result) {
    throw new HttpException(404, 'Something went wrong')
  }

  const { affectedRows, changedRows, info } = result

  const message = !affectedRows
    ? 'Cat not found'
    : affectedRows && changedRows
    ? 'Cat updated successfully'
    : 'Updated failed'

  res.send({ message, info })
}

const deleteCat = async (req, res, next) => {
  const result = await deleteCatData(req.params.id)
  if (!result) {
    throw new HttpException(404, 'Category not found')
  }
  res.send('Post has been deleted')
}

const getAllCategory = async (req, res, next) => {
  let postList = await find()

  if (!postList.length) {
    throw new HttpException(404, 'Category not found')
  }

  postList = postList.map((post) => {
    return post
  })

  res.send(postList)
}

const getCatById = async (req, res, next) => {
  // console.log(req.params.id)
  let post = await findOne({ cat_id: req.params.id })
  // console.log(Object.keys(post).length)
  if (Object.keys(post).length === 0) {
    throw new HttpException(404, 'Posts not found')
  }

  res.send(post)
}

/******************************************************************************
 *                               Export                                       *
 ******************************************************************************/

export { createCategory, updateCat, deleteCat, getAllCategory, getCatById }
