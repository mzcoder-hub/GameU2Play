import { DBConnection } from '../db/db-connection.js'
import { multipleColumnSet } from '../utils/common.utils.js'
import { Role } from '../utils/userRoles.utils.js'

const tableName = 'posts'
const db = await new DBConnection().query

const find = async (params = {}) => {
  let sql = `SELECT *, CONVERT(post_id, char) as post_id, CONVERT(uid, char) as uid FROM ${tableName} ORDER BY created_at DESC`

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
  return { ...result[0] }
}

const create = async ({
  post_title,
  post_content,
  uid,
  categories_id,
  primary_image,
  slug,
}) => {
  // console.log(post_title, post_content, uid, categories_id, primary_image, slug)
  const sql = `INSERT INTO ${tableName}
        (post_title, post_content, uid, categories_id, primary_image, slug) VALUES (?,?,?,?,?,?)`

  const result = await db(sql, [
    post_title,
    post_content,
    uid,
    categories_id,
    primary_image,
    slug,
  ])

  const affectedRows = result ? result.affectedRows : 0
  return affectedRows
}

const update = async (params, id) => {
  const { columnSet, values } = multipleColumnSet(params)

  const sql = `UPDATE ${tableName} SET ${columnSet} WHERE post_id = ?`

  const result = await db(sql, [...values, id])

  return result
}

const deletePostData = async (id) => {
  const sql = `DELETE FROM ${tableName}
        WHERE post_id = ?`
  const result = await db(sql, [id])
  const affectedRows = result ? result.affectedRows : 0

  return affectedRows
}

export { find, findOne, update, create, deletePostData }
