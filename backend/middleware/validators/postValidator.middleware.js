import { body } from 'express-validator'

const createPostValidation = [
  body('post_title')
    .exists()
    .withMessage('post_title Required')
    .isLength({ min: 100 })
    .withMessage('Post Title must contain at least 100 characters')
    .notEmpty()
    .withMessage('post_title Must Be Filled'),
  body('content')
    .exists()
    .withMessage('content Required')
    .isLength({ min: 200 })
    .withMessage('Content must contain at least 200 characters')
    .notEmpty()
    .withMessage('content Must Be Filled'),
  body('userId')
    .exists()
    .withMessage('userId Required')
    .notEmpty()
    .withMessage('userId Must Be Filled'),
  body('catId')
    .exists()
    .withMessage('catId Required')
    .notEmpty()
    .withMessage('catId Must Be Filled'),
  body('primaryImage')
    .exists()
    .withMessage('primaryImage Required')
    .notEmpty()
    .withMessage('primaryImage Must Be Filled'),
  body('slug')
    .exists()
    .withMessage('slug Required')
    .notEmpty()
    .withMessage('slug Must Be Filled'),
]

const updatePostValidation = [
  body('post_title')
    .optional()
    .isLength({ min: 100 })
    .withMessage('Post Title must contain at least 100 characters'),
  body('content')
    .optional()
    .isLength({ min: 200 })
    .withMessage('Content must contain at least 200 characters'),
  body('userId').optional(),
  body('catId').optional(),
  body('primaryImage').optional(),
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
        'content',
        'userId',
        'catId',
        'primaryImage',
        'slug',
      ]
      return updates.every((update) => allowUpdates.includes(update))
    })
    .withMessage('Invalid updates!'),
]

export { createPostValidation, updatePostValidation }
