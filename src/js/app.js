let openings;

async function pageLoad() {
  await getOpenings()
  var board = Chessboard('board', 'start')
  console.log(board)
}

async function getOpenings() {
  openings = await fetch("https://raw.githubusercontent.com/hayatbiralem/eco.json/master/eco.json")
    .then(data => {return data.json()})
}

function selectOpening() {
  let len = openings.length
  let rand = Math.floor(Math.random() * len)

  let choice = openings[rand]
  console.log(choice)
}