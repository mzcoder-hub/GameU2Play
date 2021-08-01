import { DBConnection } from '../db/db-connection.js'
import { multipleColumnSet } from '../utils/common.utils.js'
import { Role } from '../utils/userRoles.utils.js'

const tableName = 'tournaments'
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
  title,
  description,
  venue,
  prizepool,
  rule_link,
  contact_person,
  registration_start,
  registration_end,
  start,
  end,
  create_date,
  difficult,
}) => {
  const sql = `INSERT INTO ${tableName}
        ( title, description, venue, prizepool, rule_link, contact_person, registration_start, registration_end, start, end, difficult) 
        VALUES (?,?,?,?,?,?,?,?,?,?,?)`

  const result = await db(sql, [
    title,
    description,
    venue,
    prizepool,
    rule_link,
    contact_person,
    registration_start,
    registration_end,
    start,
    end,
    difficult,
  ])
  const affectedRows = result ? result.affectedRows : 0
  return affectedRows
}

const update = async (params, id) => {
  const { columnSet, values } = multipleColumnSet(params)

  const sql = `UPDATE ${tableName} SET ${columnSet} WHERE idPost = ?`

  const result = await db(sql, [...values, id])

  return result
}

const deletePostData = async (id) => {
  const sql = `DELETE FROM ${tableName}
        WHERE idPost = ?`
  const result = await db(sql, [id])
  const affectedRows = result ? result.affectedRows : 0

  return affectedRows
}

export { find, findOne, update, create, deletePostData }
