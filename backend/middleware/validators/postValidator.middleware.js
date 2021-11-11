import { body } from 'express-validator'

const createPostValidation = [
  body('post_title')
    .exists()
    .withMessage('post_title Required')
    .isLength({ min: 100 })
    .withMessage('Post Title must contain at least 100 characters')
    .notEmpty()
    .withMessage('post_title Must Be Filled'),
  body('post_content')
    .exists()
    .withMessage('content Required')
    .isLength({ min: 200 })
    .withMessage('Content must contain at least 200 characters')
    .notEmpty()
    .withMessage('content Must Be Filled'),
  body('uid')
    .exists()
    .withMessage('uid Required')
    .notEmpty()
    .withMessage('uid Must Be Filled'),
  body('categories_id')
    .exists()
    .withMessage('categories_id Required')
    .notEmpty()
    .withMessage('categories_id Must Be Filled'),
  body('primary_image')
    .exists()
    .withMessage('primary_image Required')
    .notEmpty()
    .withMessage('primary_image Must Be Filled'),
  body('slug')
    .exists()
    .withMessage('slug Required')
    .notEmpty()
    .withMessage('slug Must Be Filled'),
]

const updatePostValidation = [
  body('post_title')
    .optional()
    .isLength({ min: 50 })
    .withMessage('Post Title must contain at least 50 characters'),
  body('content')
    .optional()
    .isLength({ min: 50 })
    .withMessage('Content must contain at least 50 characters'),
  body('uid').optional(),
  body('categories_id').optional(),
  body('primary_image').optional(),
  body('slug').optional(),
  body()
    .custom((value) => {
      return !!Object.keys(value).length
    })
    .withMessage('Please provide required field to update')
    .custom((value) => {
      const updates = Object.keys(value)
      const allowUpdates = [
        'post_title',
        'post_content',
        'uid',
        'categories_id',
        'primary_image',
        'slug',
      ]
      return updates.every((update) => allowUpdates.includes(update))
    })
    .withMessage('Invalid updates!'),
]

export { createPostValidation, updatePostValidation }
