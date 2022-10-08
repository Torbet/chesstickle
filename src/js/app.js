let openings;
let choice;
let board;

async function pageLoad() {
  await getOpenings()
  board = Chessboard('board', 'start')
}

async function getOpenings() {
  openings = await fetch("https://raw.githubusercontent.com/hayatbiralem/eco.json/master/eco.json")
    .then(data => {return data.json()})
}

function selectOpening() {
  let len = openings.length
  let rand = Math.floor(Math.random() * len)

  choice = openings[rand]

  $('#opening-name').html(choice.name)
  board = Chessboard('board', choice.fen)
}