import express from 'express'
import {
  createTournament,
  updateTournament,
  getDetailTournament,
  deleteTournament,
  getAllTournament,
  registerTournament,
} from '../controllers/tournaments.controller.js'
import { auth } from '../middleware/auth.middleware.js'
import { Role } from '../utils/userRoles.utils.js'
import {
  createTourValidation,
  updateTourValidation,
} from '../middleware/validators/tournamentValidator.middleware.js'
import { awaitHandlerFactory } from '../middleware/awaitHandlerFactory.middleware.js'

const router = express.Router()

/******************************************************************************
 *                              Create Tournament  Route                      *
 ******************************************************************************/

router.post(
  '/',
  auth(Role.Admin, Role.SuperAdmin),
  createTourValidation,
  awaitHandlerFactory(createTournament)
)

/******************************************************************************
 *                              Update Tournament Route                       *
 ******************************************************************************/

router.patch(
  '/update/:id',
  auth(Role.SuperAdmin, Role.Admin),
  updateTourValidation,
  awaitHandlerFactory(updateTournament)
)

/******************************************************************************
 *                              Register Tournament Route                     *
 ******************************************************************************/

router.post(
  '/register/',
  auth(Role.User),
  awaitHandlerFactory(registerTournament)
)

/******************************************************************************
 *                              Detail Tournament Route                       *
 ******************************************************************************/
router.post('/detail/:id', auth(), awaitHandlerFactory(getDetailTournament))
router.get('/details', auth(), awaitHandlerFactory(getAllTournament))

/******************************************************************************
 *                              Delete Tournament Route                       *
 ******************************************************************************/
router.delete('/:id', deleteTournament)

export default router
