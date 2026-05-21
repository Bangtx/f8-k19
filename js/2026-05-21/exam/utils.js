const groupBy = (items, key) => {
  const result = {}
  for (const item of items) {
    const newItm = { ...item }

    if (result[item[key]]) result[item[key]].push(newItm)
    else result[item[key]] = [newItm]
  }

  return result
}

const toHashMap = (items, key = 'id') => {
  const result = {}
  for (const item of items) {
    result[item[key]] = { ...item }
  }

  return result
}

export {
  groupBy,
  toHashMap
}