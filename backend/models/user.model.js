import { DBConnection } from '../db/db-connection.js'
import { multipleColumnSet } from '../utils/common.utils.js'

const tableName = 'users'
const db = await new DBConnection().query

const find = async (params = {}) => {
  let sql = `SELECT * FROM ${tableName}`

  if (!Object.keys(params).length) {
    return await db(sql)
  }

  const { columnSet, values } = multipleColumnSet(params)
  sql += ` WHERE ${columnSet}`

  return await db(sql, [...values])
}

const findOne = async (params) => {
  const { columnSet, values } = multipleColumnSet(params)

  const sql = `SELECT * FROM ${tableName}
        WHERE ${columnSet}`

  const result = await db(sql, [...values])

  // return back the first row (user)
  return result[0]
}

const create = async ({
  first_name,
  last_name,
  email,
  phone_number,
  password,
  role = 'user',
  verification_code,
}) => {
  const sql = `INSERT INTO ${tableName}
        (first_name, last_name, email, phone_number, password, role, verification_code) VALUES (?,?,?,?,?,?,?)`

  const result = await db(sql, [
    first_name,
    last_name,
    email,
    phone_number,
    password,
    role,
    verification_code,
  ])
  const affectedRows = result ? result.affectedRows : 0
  return affectedRows
}

const update = async (params, id) => {
  const { columnSet, values } = multipleColumnSet(params)

  const sql = `UPDATE users SET ${columnSet} WHERE uid = ?`

  const result = await db(sql, [...values, id])

  return result
}

const deleteUserData = async (id) => {
  const sql = `DELETE FROM ${tableName}
        WHERE uid = ?`
  const result = await db(sql, [id])
  const affectedRows = result ? result.affectedRows : 0

  return affectedRows
}

export { find, findOne, update, create, deleteUserData }
