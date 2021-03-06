import { HttpException } from '../utils/HttpException.utils.js'
import { findOne } from '../models/user.model.js'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

const auth = (...roles) => {
  return async function (req, res, next) {
    try {
      // console.log(req.params.id)
      const authHeader = req.headers.authorization
      const bearer = 'Bearer '

      if (!authHeader || !authHeader.startsWith(bearer)) {
        throw new HttpException(401, 'Access denied. No credentials sent!')
      }

      const token = authHeader.replace(bearer, '')
      const secretKey = process.env.SECRET_JWT || ''

      // Verify Token
      const decoded = jwt.verify(token, secretKey)
      const user = await findOne({ uid: decoded.user_id })

      if (!user) {
        throw new HttpException(401, 'Authentication failed!')
      }

      // check if the current user is the owner user
      const ownerAuthorized = req.params.id == user.uid

      // if the current user is not the owner and
      // if the user role don't have the permission to do this action.
      // the user will get this error
      if (!ownerAuthorized && roles.length && !roles.includes(user.role)) {
        throw new HttpException(401, 'Unauthorized')
      }

      // if the user has permissions
      req.currentUser = user
      next()
    } catch (e) {
      e.status = 401
      next(e)
    }
  }
}

export { auth }
