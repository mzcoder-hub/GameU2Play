import { DBConnection } from '../db/db-connection.js'
import { multipleColumnSet } from '../utils/common.utils.js'

const tableName = 'posts'
const db = await new DBConnection().query

const find = async (params = {}) => {
  let sql = `SELECT p.*, 
  CONVERT(p.post_id, char) as post_id, CONVERT(p.uid, char) as uid, a.category_title, a.slug as category_slug
  FROM ${tableName} p
  JOIN post_categories n
  ON n.post_id = p.post_id 
  JOIN categorize a
  ON a.cat_id = n.categorize_id 
  ORDER BY created_at DESC`

  if (!Object.keys(params).length) {
    return await db(sql)
  }

  const { columnSet, values } = multipleColumnSet(params)
  sql += ` WHERE ${columnSet}`

  return await db(sql, [...values])
}

const findOne = async (params) => {
  const { columnSet, values } = multipleColumnSet(params)

  const sql = `SELECT p.*, 
  CONVERT(p.post_id, char) as post_id, CONVERT(p.uid, char) as uid, a.category_title, a.slug as category_slug
  FROM ${tableName} p
  JOIN post_categories n
  ON n.post_id = p.post_id 
  JOIN categorize a
  ON a.cat_id = n.categorize_id 
  WHERE p.${columnSet} = ${values}
  ORDER BY created_at DESC`

  const result = await db(sql, [...values])

  // return back the first row (user)
  return { ...result[0] }
}

const create = async ({
  post_title,
  post_content,
  uid,
  status,
  categories_id,
  primary_image,
  slug,
}) => {
  // console.log(post_title, post_content, uid, categories_id, status, primary_image, slug)
  const sql = `INSERT INTO ${tableName}
        (post_title, post_content, uid, status, categories_id,  primary_image, slug) VALUES (?,?,?,?,?,?,?)`

  const result = await db(sql, [
    post_title,
    post_content,
    uid,
    status,
    categories_id,
    primary_image,
    slug,
  ])

  const getRecentPostId = result.insertId
  const split = categories_id.split(',')

  const sqlSubmitPost_categories = `INSERT INTO post_categories
  (post_id, categorize_id) VALUES (?,?)`

  const categoryIds = await split.map(async (id) => {
    const result = await db(sqlSubmitPost_categories, [getRecentPostId, id])
  })

  const affectedRows = result ? result.affectedRows : 0
  return affectedRows
}

const update = async (params, id) => {
  const { columnSet, values } = multipleColumnSet(params)

  const sql = `UPDATE ${tableName} SET ${columnSet} WHERE post_id = ?`

  // const getRecentPostId = id
  // const split = params.categories_id.split(',')

  // const sqlSubmitPost_categories = `UPDATE post_categories
  // SET categorize_id = ? WHERE post_id = ?`

  // const categoryIds = await split.map(async (id) => {
  //   const result = await db(sqlSubmitPost_categories, [getRecentPostId, id])
  // })

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
