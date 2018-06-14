let filename = process.argv.slice(2)[0]
let fs = require('fs')
let utils = require('./gameUtils.js')

fs.unlink('output.txt', (error) => { if (error) console.log('output.txt does not exist yet') })
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
        return utils.placeBlock(move, 0, updatedGame)
      }, tetrisBoard)

    let finalBoard = board.reduce((acc, cur) => acc.length > cur.length ? acc : cur)
    let fullRows = utils.countFullRows(0, board, finalBoard.length)
    let output = `${game} --- resulting height: ${finalBoard.length - fullRows} \n`

    fs.appendFile('output.txt', output, (error) => { if (error) console.log('unable to write to file: ', error) })
    console.log(board)
  })
})
