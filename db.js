const sql = require("mssql");
require('dotenv').config()

let config = {
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_HOSTNAME,
  database: process.env.DB_DATABASE,
  options: {
    enableArithAbort: false
  }
};

sql.on('error', err => {
  console.log(err);
})


async function addUser(user) {
  try {
    let pool = await sql.connect(config)
    let result1 = await pool.request()
      .query(`INSERT INTO [dbo].[Users] ([discord_id]) VALUES ('${user}');`)

    console.dir(result1)
  } catch (err) {
    console.error(err);
  }
}


async function checkForUser(user) {
  try {
    let pool = await sql.connect(config)
    let result1 = await pool.request()
      .query(`SELECT * FROM Users WHERE discord_id = '${user}'`)

    pool.close()

    return result1.recordset[0]
  } catch (err) {
    console.error(err);
  }
}



// module.exports = {
//   createRelationship: createRelationship
// }