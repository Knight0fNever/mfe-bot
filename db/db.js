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
});

async function addRelationship(user1, user2, relationshipInt) {
  try {
    let pool = await sql.connect(config)
    let result1 = await pool.request()
      .query(`INSERT INTO Relationships ([discord_id_1] ,[discord_id_2] ,[relationship_type] ,[active]) VALUES ('${user1}', '${user2}', '${relationshipInt}', 1);`);

    pool.close()
    console.dir(`Record inserted`)
  } catch (err) {
    console.error(err);
  }
}


async function checkForRelationship(user1, user2, relationship) {
  try {
    let pool = await sql.connect(config)
    let result1 = await pool.request()
      .query(`SELECT * FROM Relationships WHERE (discord_id_1 = '${user1}' AND discord_id_2 = '${user2}' AND relationship_type = '${relationship}' AND active = 1) OR (discord_id_1 = '${user2}' AND discord_id_2 = '${user1}' AND relationship_type = '${relationship}' AND active = 1);`);

    pool.close();
    // console.log(result1.recordset[0]);

    if(result1.recordset[0] != undefined) {
      return true;
    }
    else {
      return false;
    }
  } catch (err) {
    console.error(err);
  }
}

async function deleteRelationship(user1, user2, relationship) {
  try {
    let pool = await sql.connect(config)
    let result1 = await pool.request()
      .query(`UPDATE Relationships SET active = 0, date_ended = getdate() WHERE (discord_id_1 = '${user1}' AND discord_id_2 = '${user2}' AND relationship_type = '${relationship}' AND active = 1) OR (discord_id_1 = '${user2}' AND discord_id_2 = '${user1}' AND relationship_type = '${relationship}' AND active = 1);`);

    pool.close();
    console.dir(`Record set to inactive`);
  } catch (err) {
    console.error(err);
  }
}

module.exports = {
  checkForRelationship
}