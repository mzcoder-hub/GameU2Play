import { DBConnection } from '../db/db-connection.js'
import { multipleColumnSet } from '../utils/common.utils.js'
import { Role } from '../utils/userRoles.utils.js'

const tableName = 'user'
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
  nickname,
  password,
  first_name,
  last_name,
  email,
  role = Role.SuperUser,
  birthDate = '',
}) => {
  const sql = `INSERT INTO ${tableName}
        (nickname, email, password, first_name, last_name, role, birthDate) VALUES (?,?,?,?,?,?,?)`

  const result = await db(sql, [
    nickname,
    email,
    password,
    first_name,
    last_name,
    role,
    birthDate,
  ])
  const affectedRows = result ? result.affectedRows : 0
  return affectedRows
}

const update = async (params, id) => {
  const { columnSet, values } = multipleColumnSet(params)

  const sql = `UPDATE user SET ${columnSet} WHERE idUser = ?`

  const result = await db(sql, [...values, id])

  return result
}

const deleteUserData = async (id) => {
  const sql = `DELETE FROM ${tableName}
        WHERE idUser = ?`
  const result = await db(sql, [id])
  const affectedRows = result ? result.affectedRows : 0

  return affectedRows
}

export { find, findOne, update, create, deleteUserData }
