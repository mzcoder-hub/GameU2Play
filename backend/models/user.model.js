import { DBConnection } from '../db/db-connection.js'
import { multipleColumnSet } from '../utils/common.utils.js'
import { Role } from '../utils/userRoles.utils.js'

const tableName = 'user'
const db = new DBConnection()
const find = async (params = {}) => {
  let sql = `SELECT * FROM ${tableName}`

  if (!Object.keys(params).length) {
    return await new db.query(sql)
  }

  const { columnSet, values } = multipleColumnSet(params)
  sql += ` WHERE ${columnSet}`

  return await new db.query(sql, [...values])
}

const findOne = async (params) => {
  const { columnSet, values } = multipleColumnSet(params)

  const sql = `SELECT * FROM ${tableName}
        WHERE ${columnSet}`

  const result = await new db.query(sql, [...values])

  // return back the first row (user)
  return result[0]
}

const create = async ({
  username,
  password,
  first_name,
  last_name,
  email,
  role = Role.SuperUser,
  birthDate = '',
}) => {
  const sql = `INSERT INTO ${tableName}
        (username, password, first_name, last_name, email, role, birthDate) VALUES (?,?,?,?,?,?,?)`

  const result = await new db.query(sql, [
    username,
    password,
    first_name,
    last_name,
    email,
    role,
    birthDate,
  ])
  const affectedRows = result ? result.affectedRows : 0

  return affectedRows
}

const update = async (params, id) => {
  const { columnSet, values } = multipleColumnSet(params)

  const sql = `UPDATE user SET ${columnSet} WHERE id = ?`

  const result = await new db.query(sql, [...values, id])

  return result
}

const deleteUserData = async (id) => {
  const sql = `DELETE FROM ${tableName}
        WHERE id = ?`
  const result = await new db.query(sql, [id])
  const affectedRows = result ? result.affectedRows : 0

  return affectedRows
}

export { find, findOne, create, deleteUserData }
