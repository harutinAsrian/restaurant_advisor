export const sortByAscending = (arr) => {
  const res = [...arr]
  res.sort((a,b) => b.raiting - a.raiting)
  return res
}

export const sortByDescending = (arr) => {
  const res = [...arr]
  res.sort((a,b) => a.raiting - b.raiting)
  return res
}