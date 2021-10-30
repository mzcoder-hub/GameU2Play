import { body } from 'express-validator'

const createCategoryValidation = [
  body('category_title')
    .exists()
    .withMessage('category_title Required')
    .notEmpty()
    .withMessage('category_title Must Be Filled'),
  body('category_desc').optional(),
  body('slug')
    .exists()
    .withMessage('slug Required')
    .notEmpty()
    .withMessage('slug Must Be Filled'),
]

const updateCatValidation = [
  body('category_title')
    .exists()
    .withMessage('category_title Required')
    .notEmpty()
    .withMessage('category_title Must Be Filled'),
  body('category_desc').optional(),
  body('slug')
    .exists()
    .withMessage('slug Required')
    .notEmpty()
    .withMessage('slug Must Be Filled'),
  body()
    .custom((value) => {
      return !!Object.keys(value).length
    })
    .withMessage('Please provide required field to update')
    .custom((value) => {
      const updates = Object.keys(value)
      const allowUpdates = ['category_title', 'category_desc', 'slug']
      return updates.every((update) => allowUpdates.includes(update))
    })
    .withMessage('Invalid updates!'),
]

export { createCategoryValidation, updateCatValidation }
