let openings;
let choice;
let board;

async function pageLoad() {
  await getOpenings()
  board = Chessboard('board', 'start')
}

async function getOpenings() {
  openings = await fetch("https://raw.githubusercontent.com/Torbet/chesstickle/main/src/data/openings.json")
    .then(data => {return data.json()})
}

function selectOpening() {

  let len = openings.length
  let rand = Math.floor(Math.random() * len)

  choice = openings[rand]

  let name = choice.name
  let i = name.indexOf(name.match(/, \d/))
  console.log(name)
  console.log(i)

  if (i != -1) {
   name = name.slice(0, i)
  }

  $('#opening-name').html(name)
  $('#opening-moves').html(choice.moves)
  board = Chessboard('board', choice.fen)
}