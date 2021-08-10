import { body } from 'express-validator'

const createTourValidation = [
  body('title')
    .exists()
    .withMessage('Title is required')
    .notEmpty()
    .withMessage('Title is must be Filled'),
  body('description')
    .exists()
    .withMessage('Description is required')
    .notEmpty()
    .withMessage('Description is must be Filled'),
  body('venue')
    .exists()
    .withMessage('Vanue is required')
    .notEmpty()
    .withMessage('Vanue is must be Filled'),
  body('prizepool')
    .exists()
    .withMessage('PrizePool is required')
    .notEmpty()
    .withMessage('PrizePool is must be Filled'),
  body('rule_link')
    .exists()
    .withMessage('Rule Link is required')
    .notEmpty()
    .withMessage('Rule Link is must be Filled'),
  body('contact_person')
    .exists()
    .withMessage('contact Person is required')
    .notEmpty()
    .withMessage('contact Person is must be Filled'),
  body('registration_start')
    .exists()
    .withMessage('Registration Start is required')
    .notEmpty()
    .withMessage('Registration Start is must be Filled')
    .isDate()
    .withMessage('Should be Date'),
  body('registration_end')
    .exists()
    .withMessage('Registration End is required')
    .notEmpty()
    .withMessage('Registration End is must be Filled')
    .isDate()
    .withMessage('Should be Date'),
  body('start')
    .exists()
    .withMessage('Start Date is required')
    .notEmpty()
    .withMessage('Start Date is must be Filled')
    .isDate()
    .withMessage('Should be Date'),
  body('end')
    .exists()
    .withMessage('End Date is required')
    .notEmpty()
    .withMessage('End Date is must be Filled')
    .isDate()
    .withMessage('Should be Date'),
  body('difficult')
    .exists()
    .withMessage('difficult is required')
    .notEmpty()
    .withMessage('difficult is must be Filled'),
]

const updateTourValidation = [
  body('title')
    .optional()
    .isLength({ min: 3 })
    .withMessage('Must be at least 3 chars long'),
  body('description')
    .optional()
    .isLength({ min: 3 })
    .withMessage('Must be at least 3 chars long'),
  body('venue')
    .optional()
    .isLength({ min: 3 })
    .withMessage('Must be at least 3 chars long'),
  body('prizepool')
    .optional()
    .isLength({ min: 3 })
    .withMessage('Must be at least 3 chars long'),
  body('rule_link')
    .optional()
    .isLength({ min: 3 })
    .withMessage('Must be at least 3 chars long'),
  body('contact_person')
    .optional()
    .isLength({ min: 3 })
    .withMessage('Must be at least 3 chars long'),
  body('registration_start').optional().isDate().withMessage('Should be Date'),
  body('registration_end').optional().isDate().withMessage('Should be Date'),
  body('start').optional().isDate().withMessage('Should be Date'),
  body('end').optional().isDate().withMessage('Should be Date'),
  body('difficult')
    .optional()
    .isIn(['beginner', 'intermediate', 'professional'])
    .withMessage('Invalid Difficult type'),
  body()
    .custom((value) => {
      return !!Object.keys(value).length
    })
    .withMessage('Please provide required field to update')
    .custom((value) => {
      const updates = Object.keys(value)
      const allowUpdates = [
        'title',
        'description',
        'venue',
        'prizepool',
        'rule_link',
        'contact_person',
        'registration_start',
        'registration_end',
        'start',
        'end',
        'difficult',
      ]
      return updates.every((update) => allowUpdates.includes(update))
    })
    .withMessage('Invalid updates!'),
]

export { createTourValidation, updateTourValidation }
