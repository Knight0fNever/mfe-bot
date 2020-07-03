require('dotenv').config()
const mysql = require('mysql2/promise');

// First you need to create a connection to the database
// Be sure to replace 'user' and 'password' with the correct values

const functions = {
  createUser: createUser,
  getUser: getUser,
  updateUser: updateUser
}


async function connect() {
  return await mysql.createConnection({
    host: process.env.DB_HOSTNAME,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    decimalNumbers: true
  });
}

async function disconnect(con) {
  con.end((err) => {
    console.error(err);
  });

}

async function createUser(discordID, amount) {
  const checkForUser = await getUser(discordID);
  if (checkForUser.length < 1) {
    const con = await connect();
    const [rows, fields] = await con.execute('INSERT INTO money SET discord_id = ?, cash = ?', [discordID, amount]);
    disconnect(con);
    return rows;
  }
  else {
    console.error(`User ${discordID} already exists!`);
  }
}

async function getUser(discordID) {
  // console.log(discordID);
  const con = await connect();
  const [rows, fields] = await con.execute('SELECT * from customer_120938_mfebot.money WHERE discord_ID = ?', [discordID]);
  disconnect(con);
  // console.log(`Rows: ${rows.length}`);
  return rows;
}

async function updateUser(discordID, amount) {
  const checkForUser = await getUser(discordID);
  if (checkForUser.length > 0) {
    const con = await connect();
    const [rows, fields] = await con.execute('UPDATE money SET cash = ? WHERE discord_id = ?', [amount, discordID]);
    disconnect(con);
    return rows;
  }
  else {
    console.error(`User ${discordID} already exists!`);
  }
}

module.exports = functions;