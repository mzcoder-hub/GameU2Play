import { DBConnection } from '../db/db-connection.js'
import { multipleColumnSet } from '../utils/common.utils.js'
import { Role } from '../utils/userRoles.utils.js'

const tableName = 'posts'
const db = await new DBConnection().query

const find = async (params = {}) => {
  let sql = `SELECT *, CONVERT(post_id, char) as post_id, CONVERT(uid, char) as uid, CONVERT(cat_id, char) as cat_id FROM ${tableName} ORDER BY created_at DESC`

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
  cat_id,
  primary_image,
  slug,
}) => {
  // console.log(post_title, post_content, uid, cat_id, primary_image, slug)
  const sql = `INSERT INTO ${tableName}
        (post_title, post_content, uid, cat_id, primary_image, slug) VALUES (?,?,?,?,?,?)`

  const result = await db(sql, [
    post_title,
    post_content,
    uid,
    cat_id,
    primary,
    slug,
  ])

  const getPostDetail = await db(
    `SELECT * FROM ${tableName} WHERE post_id = ${result.insertId}`,
    [],
    function (err, result) {
      return result
    }
  )
  const getPost_recent_id = { ...getPostDetail[0] }

  const sqlInsertPivot = await db(
    `INSERT INTO categorize_has_posts (cat_id, post_id) VALUES (${getPost_recent_id.post_id}, ${cat_id})`
  )

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
