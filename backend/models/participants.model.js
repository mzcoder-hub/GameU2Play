import { DBConnection } from '../db/db-connection.js'
import { multipleColumnSet } from '../utils/common.utils.js'
import { Role } from '../utils/userRoles.utils.js'

const tableName = 'participants'
const theId = 'participant_id'
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

const register = async ({ team_player_id, tournament_id }) => {
  const sql = `INSERT INTO ${tableName}
        ( team_player_id, tournament_id) 
        VALUES (?,?)`

  const result = await db(sql, [team_player_id, tournament_id])
  const affectedRows = result ? result.affectedRows : 0
  return affectedRows
}

const deleteTournamentParticipant = async (id) => {
  const sql = `DELETE FROM ${tableName}
        WHERE ${theId} = ?`
  const result = await db(sql, [id])
  const affectedRows = result ? result.affectedRows : 0

  return affectedRows
}

export { register, deleteTournamentParticipant }
