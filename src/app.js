async function getOpening() {
  let openings = await fetch("https://raw.githubusercontent.com/hayatbiralem/eco.json/master/eco.json")
    .then(data => {return data.json()})

  let len = openings.length
  let rand = Math.floor(Math.random() * len)

  let choice = openings[rand]
  console.log(choice)
}

async function pageLoad() {
  await getOpening()
}