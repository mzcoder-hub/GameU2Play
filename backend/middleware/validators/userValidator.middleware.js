import { body } from 'express-validator'
import { Role } from '../../utils/userRoles.utils.js'

const createUserSchema = [
  body('first_name')
    .exists()
    .withMessage('Your first name is required')
    .isAlpha()
    .withMessage('Must be only alphabetical chars')
    .isLength({ min: 3 })
    .withMessage('Must be at least 3 chars long'),
  body('last_name')
    .exists()
    .withMessage('Your last name is required')
    .isString()
    .withMessage('Must be only alphabetical chars')
    .isLength({ min: 3 })
    .withMessage('Must be at least 3 chars long'),
  body('email')
    .exists()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Must be a valid email')
    .normalizeEmail(),
  body('role')
    .optional()
    .isIn([Role.Admin, Role.SuperAdmin, Role.User])
    .withMessage('Invalid Role type'),
  body('password')
    .exists()
    .withMessage('Password is required')
    .notEmpty()
    .isLength({ min: 6 })
    .withMessage('Password must contain at least 6 characters')
    .isLength({ max: 15 })
    .withMessage('Password can contain max 10 characters'),
  body('confirm_password')
    .exists()
    .custom((value, { req }) => value === req.body.password)
    .withMessage(
      'confirm_password field must have the same value as the password field'
    ),
  body('birth_date').optional(),
]

const updateUserSchema = [
  body('username')
    .optional()
    .isLength({ min: 3 })
    .withMessage('Must be at least 3 chars long'),
  body('first_name')
    .optional()
    .isAlpha()
    .withMessage('Must be only alphabetical chars')
    .isLength({ min: 3 })
    .withMessage('Must be at least 3 chars long'),
  body('last_name')
    .optional()
    .isAlpha()
    .withMessage('Must be only alphabetical chars')
    .isLength({ min: 3 })
    .withMessage('Must be at least 3 chars long'),
  body('email')
    .optional()
    .isEmail()
    .withMessage('Must be a valid email')
    .normalizeEmail(),
  body('role').optional(),
  body('password')
    .optional()
    .notEmpty()
    .isLength({ min: 6 })
    .withMessage('Password must contain at least 6 characters')
    .isLength({ max: 10 })
    .withMessage('Password can contain max 10 characters')
    .custom((value, { req }) => !!req.body.confirm_password)
    .withMessage('Please confirm your password'),
  body('confirm_password')
    .optional()
    .custom((value, { req }) => value === req.body.password)
    .withMessage(
      'confirm_password field must have the same value as the password field'
    ),
  body('birth_date').optional(),
  body()
    .custom((value) => {
      return !!Object.keys(value).length
    })
    .withMessage('Please provide required field to update')
    .custom((value) => {
      const updates = Object.keys(value)
      const allowUpdates = [
        'first_name',
        'last_name',
        'birth_date',
        'gender',
        'email',
        'phone_number',
        'address',
        'password',
        'role',
        'status',
      ]
      return updates.every((update) => allowUpdates.includes(update))
    })
    .withMessage('Invalid updates!'),
]

const validateLogin = [
  body('email')
    .exists()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Must be a valid email')
    .normalizeEmail(),
  body('password')
    .exists()
    .withMessage('Password is required')
    .notEmpty()
    .withMessage('Password must be filled'),
]

const validateVerification = [
  body('verification_code').exists().withMessage('Code is required'),
]

export {
  createUserSchema,
  updateUserSchema,
  validateLogin,
  validateVerification,
}
