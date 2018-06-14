let tetrisBlock = require('./blocks.js')

module.exports = {
  positionBlock : (blockType, column, row) => {
    switch (blockType) {
      case 'I':
        return tetrisBlock.I(column, row)
        break;
      case 'Q':
        return tetrisBlock.Q(column, row)
        break;
      case 'L':
        return tetrisBlock.L(column, row)
        break;
      case 'J':
        return tetrisBlock.J(column, row)
        break;
      case 'Z':
        return tetrisBlock.Z(column, row)
        break;
      case 'S':
        return tetrisBlock.S(column, row)
        break;
      case 'T':
        return tetrisBlock.T(column, row)
        break;
    }
  },

  placeBlock : (block, row, board) => {
    let blocktype = block.charAt(0)
    let blockColumn = parseInt(block.charAt(1))
    let coordinates = module.exports.positionBlock(blocktype, blockColumn, row)

    if (module.exports.isSpaceFree(coordinates, board))
      coordinates.map(coordinate => board[coordinate[1]][coordinate[0]] = "X")
    else
      module.exports.placeBlock(block, row + 1, board)

    return board
  },

  isSpaceFree : (coordinates, board) => {
    return coordinates
      .map(coordinate => typeof board[coordinate[1]][coordinate[0]] == 'undefined')
      .reduce((accumulator, current) => accumulator && current)
  },

  isRowFull : (board, row) => board.reduce((acc, cur) => acc && cur[row] == "X"),

  countFullRows : (acc, board, row) => {
    if (row < 0) {
      return acc
    } else {
      if (module.exports.isRowFull(board, row))
        return module.exports.countFullRows(acc + 1, board, row - 1)
      else
        return module.exports.countFullRows(acc, board, row - 1)
    }
  }
}
