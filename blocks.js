module.exports = {
  I : (column, row) => {
    return [
      [row, column + 0],
      [row, column + 1],
      [row, column + 2],
      [row, column + 3]
    ]
  },

  Q : (column, row) => {
    return [
      [row, column + 0],
      [row, column + 1],
      [row + 1, column + 0],
      [row + 1, column + 1]
    ]
  }
}
