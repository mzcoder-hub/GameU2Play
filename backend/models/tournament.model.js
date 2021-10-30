import { DBConnection } from '../db/db-connection.js'
import { multipleColumnSet } from '../utils/common.utils.js'
import { Role } from '../utils/userRoles.utils.js'

const tableName = 'tournaments'
const theId = 'tournament_id'
const db = await new DBConnection().query

const find = async (params = {}) => {
  let sql = `SELECT *, CONVERT(tournament_id, char) as tournament_id, DATE_FORMAT(registration_start, '%Y-%m-%d') as registration_start, DATE_FORMAT(registration_end, '%Y-%m-%d') as registration_end, DATE_FORMAT(start, '%Y-%m-%d') as start, DATE_FORMAT(end, '%Y-%m-%d') as end FROM ${tableName} ORDER BY create_date DESC`

  if (!Object.keys(params).length) {
    return await db(sql)
  }

  const { columnSet, values } = multipleColumnSet(params)
  sql += ` WHERE ${columnSet}`

  return await db(sql, [...values])
}

const findOne = async (params) => {
  const { columnSet, values } = multipleColumnSet(params)

  const sql = `SELECT *, CONVERT(tournament_id, char) as tournament_id, DATE_FORMAT(registration_start, '%Y-%m-%d') as registration_start, DATE_FORMAT(registration_end, '%Y-%m-%d') as registration_end, DATE_FORMAT(start, '%Y-%m-%d') as start, DATE_FORMAT(end, '%Y-%m-%d') as end   FROM ${tableName}
        WHERE ${columnSet}`

  const result = await db(sql, [...values])

  // return back the first row (user)
  return result[0]
}

const create = async ({
  title,
  organizer,
  description,
  featured_image,
  venue,
  prizepool,
  rule_link,
  contact_person,
  registration_start,
  registration_end,
  start,
  end,
  difficult,
  max_team,
}) => {
  const sql = `INSERT INTO ${tableName}
        ( 
          title,
          organizer,
          description,
          featured_image,
          venue,
          prizepool,
          rule_link,
          contact_person,
          registration_start,
          registration_end,
          start,
          end,
          difficult,
          max_team
          ) 
        VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)`

  const result = await db(sql, [
    title,
    organizer,
    description,
    featured_image,
    venue,
    prizepool,
    rule_link,
    contact_person,
    registration_start,
    registration_end,
    start,
    end,
    difficult,
    max_team,
  ])
  const affectedRows = result ? result.affectedRows : 0
  return affectedRows
}

const update = async (params, id) => {
  const { columnSet, values } = multipleColumnSet(params)

  const sql = `UPDATE ${tableName} SET ${columnSet} WHERE ${theId} = ?`

  const result = await db(sql, [...values, id])

  return result
}

const deleteTournamentData = async (id) => {
  const sql = `DELETE FROM ${tableName}
        WHERE ${theId} = ?`
  const result = await db(sql, [id])
  const affectedRows = result ? result.affectedRows : 0

  return affectedRows
}

export { find, findOne, update, create, deleteTournamentData }
