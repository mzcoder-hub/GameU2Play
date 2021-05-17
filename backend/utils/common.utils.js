const multipleColumnSet = (object) => {
  if (typeof object !== 'object') {
    throw new Error('Invalid input')
  }

  const keys = Object.keys(object)
  const values = Object.values(object)

  const columnSet = keys.map((key) => `${key} = ?`).join(', ')

  return {
    columnSet,
    values,
  }
}

export { multipleColumnSet }
