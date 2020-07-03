const db = require('./db');
const Game = require('./game');



async function test() {
  // const rows = await db.updateUser('452565', 12654.44);
  // console.log(rows[0].discord_id);
  //   for(let i = 0; i < rows.length; i++) {
  //     console.log(rows[i]);
  //   }

  let game = new Game('452565', 11000.35);
  await game.new();
}

test();