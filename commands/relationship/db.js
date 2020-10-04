require('dotenv').config()
const mysql = require('mysql2/promise');

// First you need to create a connection to the database
// Be sure to replace 'user' and 'password' with the correct values

const functions = {
  checkForRelationship: checkForRelationship
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

async function checkForRelationship(user1, user2, relationship) {
    // console.log(discordID);
    const con = await connect();
    const [rows, fields] = await con.execute('SELECT * FROM customer_120938_mfebot.relationships WHERE (user1 = ? AND user2 = ? AND relationshipName = ?) OR (user2 = ? AND user1 = ? AND relationshipName = ?)', [user1, user2, relationship, user1, user2, relationship]);
    disconnect(con);
    // console.log(`Rows: ${rows.length}`);
    return rows;
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

module.exports = functions;