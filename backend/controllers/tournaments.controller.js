import { validationResult } from 'express-validator'
import dotenv from 'dotenv'
dotenv.config()

import {
  create,
  find,
  findOne,
  update,
  deleteTournamentData,
} from '../models/tournament.model.js'

import { register } from '../models/participants.model.js'
import { HttpException } from '../utils/HttpException.utils.js'

/******************************************************************************
 *                              JsonResult                                    *
 ******************************************************************************/
const resultMessage = (responsCode, status, message, data = '') => {
  if (data == '') {
    const result = {
      responsCode: responsCode,
      status: status,
      message: message,
    }

    return result
  } else {
    const result = {
      responsCode: responsCode,
      status: status,
      data: data,
    }
    return result
  }
}
/******************************************************************************
 *                              Tournament Controller                         *
 ******************************************************************************/

const checkValidation = (req) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    throw new HttpException(400, JSON.stringify(errors))
  }
}

/******************************************************************************
 *                              Create Tournament                             *
 ******************************************************************************/

const createTournament = async (req, res, next) => {
  checkValidation(req)

  const result = await create(req.body)

  if (!result) {
    throw new HttpException(500, 'Something went wrong')
  }

  res
    .status(201)
    .send(resultMessage(200, 'success', 'Tournament Berhasil Dibuat'))
}

/******************************************************************************
 *                              Detail Tournament                             *
 ******************************************************************************/
const getDetailTournament = async (req, res, next) => {
  const tournamentById = await findOne({ tournament_id: req.params.id })

  if (!tournamentById) {
    throw new HttpException(404, 'Tournament not found')
  }

  res.send(resultMessage(200, 'success', '', tournamentById))
}

const getAllTournament = async (req, res, next) => {
  let tournamentList = await find()
  if (!tournamentList.length) {
    throw new HttpException(404, 'Tournament not found')
  }

  res.send(tournamentList)
}

/******************************************************************************
 *                              Update Tournament                             *
 ******************************************************************************/

const updateTournament = async (req, res, next) => {
  checkValidation(req)

  // do the update query and get the result
  // it can be partial edit
  const result = await update(req.body, req.params.id)

  if (!result) {
    throw new HttpException(404, 'Something went wrong')
  }

  const { affectedRows, changedRows, info } = result

  const message = !affectedRows
    ? 'Tournament not found'
    : affectedRows && changedRows
    ? 'Tournament updated successfully'
    : 'Updated failed'

  res.send(resultMessage(200, 'success', message))
}

/******************************************************************************
 *                              Delete Tournament                             *
 ******************************************************************************/

const deleteTournament = async (req, res, next) => {
  //   console.log(req.params.id)
  const result = await deleteTournamentData(req.params.id)

  if (!result) {
    throw new HttpException(404, 'Tournament not found')
  }

  res
    .status(201)
    .send(resultMessage(200, 'success', 'Tournament has been deleted'))
}

/******************************************************************************
 *                              Register Tournament                           *
 ******************************************************************************/
const registerTournament = async (req, res, next) => {
  // console.log(req.body)
  checkValidation(req)

  const result = await register(req.body)

  if (!result) {
    throw new HttpException(500, 'Something went wrong')
  }

  res
    .status(201)
    .send(resultMessage(200, 'success', 'Tournament Berhasil Dibuat'))
}

/******************************************************************************
 *                               Export                                       *
 ******************************************************************************/
export {
  createTournament,
  getAllTournament,
  updateTournament,
  getDetailTournament,
  deleteTournament,
  registerTournament,
}
