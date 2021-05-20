import { body } from 'express-validator'

const createCategoryValidation = [
  body('nameCategory')
    .exists()
    .withMessage('nameCategory Required')
    .isLength({ min: 100 })
    .withMessage('Name Category must contain at least 100 characters')
    .notEmpty()
    .withMessage('nameCategory Must Be Filled'),
  body('description').optional(),
  body('slug')
    .exists()
    .withMessage('slug Required')
    .notEmpty()
    .withMessage('slug Must Be Filled'),
]

const updateCategoryValidation = [
  body('nameCategory')
    .exists()
    .withMessage('nameCategory Required')
    .isLength({ min: 100 })
    .withMessage('Name Category must contain at least 100 characters')
    .notEmpty()
    .withMessage('nameCategory Must Be Filled'),
  body('description').optional(),
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
      const allowUpdates = ['nameCategory', 'description', 'slug']
      return updates.every((update) => allowUpdates.includes(update))
    })
    .withMessage('Invalid updates!'),
]

export { createCategoryValidation, updateCategoryValidation }
