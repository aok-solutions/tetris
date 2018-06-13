let filename = process.argv.slice(2)[0]
let fs = require('fs')
let tetrisBlock = require('./blocks.js')

const positionBlock = (blockType, column, row) => {
  switch (blockType) {
    case 'I':
      return tetrisBlock.I(column, row)
      break;
    case 'Q':
      return tetrisBlock.Q(column, row)
      break;
  }
}

const placeBlock = (block, row, board) => {
  let blocktype = block.charAt(0)
  let blockColumn = parseInt(block.charAt(1))
  let coordinates = positionBlock(blocktype, blockColumn, row)
  console.log("coordinates are: ", coordinates)

  if (isSpaceFree(coordinates, board)) {
    coordinates.map(coordinate => board[coordinate[1]][coordinate[0]] = "X")
  } else {
    placeBlock(block, row + 1, board)
  }

  return board
}

const isSpaceFree = (coordinates, board) => {
  return coordinates
    .map(coordinate => typeof board[coordinate[1]][coordinate[0]] == 'undefined')
    .reduce((accumulator, current) => accumulator && current)
}

fs.readFile(filename, (error, data) => {
  if (error) return console.log(error)
  let input =
    data
      .toString()
      .split('\n')
      .map(line => line.trim())
      .filter(n => n)

  input.map(game => {
    console.log("game: ", game)
    let tetrisBoard = [
      [],[],[],[],[],[],[],[],[],[]
    ]

    let board = game
      .split(",")
      .reduce((updatedGame, move) => {
        console.log("next move: ", move)
        return placeBlock(move, 0, updatedGame)
      }, tetrisBoard)

    console.log(board)
  })
})
