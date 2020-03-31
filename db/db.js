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

let relateCoolDowns = {

};

const relateCoolDownTime = 300000;

const currentProposals = new Set();


async function marry(msg, client, user1, user2) {
  if(!await checkForRelationship(user1, user2, 'marriage')) {
    // Check for permission
    msg.channel.send(`<@${user1}> has proposed to ${user2}, does ${user2} accept?`);
    let cooldownObj = `${user2}-marriage`;
    realateCooldown(cooldownObj, user1, user2, 'marriage');
  }
  else {
    msg.channel.send('Sorry, that relationship already exists!');
  }
}

async function checkForCooldown(msg, user2, relationship) {
  // If current question
  if(relateCoolDowns[JSON.stringify(`${user2}-${relationship}`)] != undefined) {
    // Evaluate answer
    if(msg.content.toLowerCase() == 'yes') {
      // Yes
      console.log("Said Yes. Record in DB");
    }
    else if(msg.content.toLowerCase() == 'no') {
      // No
      console.log("Said No.");
    }
    else {
      // Answer not valid
      console.log("Answer not valid");
    }
  }
  else {
    // Do nothing
  }
}

// async function addQuestion(user1, user2, relationship) {

// }

// async function removeQuestion(user1, user2, relationship) {

// }

function realateCooldown(cooldownObj, user1, user2, relationship) {
  currentProposals.add(cooldownObj);
  relateCoolDowns[cooldownObj] = {
    'user1': user1,
    'user2': user2,
    'relationship': relationship,
    'timer': setTimeout(() => {
      currentProposals.delete(cooldownObj);
      delete relateCoolDowns[cooldownObj];
    }, relateCoolDownTime)
  }
}

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
  marry: marry,
  checkForCooldown: checkForCooldown
}