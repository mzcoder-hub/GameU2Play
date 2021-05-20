import { DBConnection } from '../db/db-connection.js'
import { multipleColumnSet } from '../utils/common.utils.js'
import { Role } from '../utils/userRoles.utils.js'

const tableName = 'category'
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

const create = async ({ nameCategory, description, slug }) => {
  const sql = `INSERT INTO ${tableName}
        (nameCategory, description, slug) VALUES (?,?,?)`

  const result = await db(sql, [nameCategory, description, slug])
  const affectedRows = result ? result.affectedRows : 0
  return affectedRows
}

const update = async (params, id) => {
  const { columnSet, values } = multipleColumnSet(params)

  const sql = `UPDATE ${tableName} SET ${columnSet} WHERE catId = ?`

  const result = await db(sql, [...values, id])

  return result
}

const deleteCatData = async (id) => {
  const sql = `DELETE FROM ${tableName}
        WHERE catId = ?`
  const result = await db(sql, [id])
  const affectedRows = result ? result.affectedRows : 0

  return affectedRows
}

export { find, findOne, update, create, deleteCatData }
