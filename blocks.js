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
  },

  L : (column, row) => {
    return [
      [row, column + 1],
      [row, column],
      [row + 1, column],
      [row + 2, column]
    ]
  },

  J : (column, row) => {
    return [
      [row, column],
      [row, column + 1],
      [row + 1, column + 1],
      [row + 2, column + 1]
    ]
  },

  Z : (column, row) => {
    return [
      [row + 1, column],
      [row + 1, column + 1],
      [row, column + 1],
      [row, column + 2]
    ]
  },

  S : (column, row) => {
    return [
      [row, column],
      [row, column + 1],
      [row + 1, column + 1],
      [row + 1, column + 2]
    ]
  },

  T : (column, row) => {
    return [
      [row + 1, column],
      [row + 1, column + 1],
      [row, column + 1],
      [row + 1, column + 2]
    ]
  }
}
