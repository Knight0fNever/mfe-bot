const fs = require('fs').promises;
const { embedBuilder } = require("../../helper");
const db = require('./db');
const { timeStamp } = require('console');

/*
  Starting Relationship
  [ ] Initial create relationship command handling
    [ ] Check for existing relationship between the two parties 
    [ ] Send confirmation question to mentioned user
    [ ] Add command to cool down
    [ ] Remove from cooldown after time
    [ ] Remove from cooldown if any other answer other than 'yes'

  [ ] After yes is received, create relationship
    [ ] Send confirmation of creation
*/

/*
  Ending Relationship
  [ ] Initial create relationship command handling
    [ ] Check for existing relationship between the two parties
    [ ] Send confirmation question to message author
    [ ] Add command to cool down
    [ ] Remove from cooldown after time
    [ ] Remove from cooldown if any other answer other than 'yes'

  [ ] After yes is received, delete relationship
    [ ] Send confirmation of deletion
*/



let activeRequests = new Set();

const functions = {
  marry: (target, msg, client) => {
    let user1 = msg.author;
    let user2 = target;
    let relationshipExists = false;

    // TODO: Check for existing relationship
    if (relationshipExists) {
      // Exists
    }
    else {

    }
  }
}

async function relationshipExists(user1, user2, relationship) {
  let result = await db.checkForRelationship(user1, user2, relationship);
  if(result.length == 0) {
    return false;
  }
  else {
    return true;
  }
}

async function test() {
  console.log(await relationshipExists('156143457411268608', '615687360138575893', 'mariage'));
}

test();



module.exports = functions;
