// const fs = require('fs').promises;
// const { embedBuilder } = require("../helper");
// const db = require('../db/db');


// let relateCoolDowns = {

// };

// const relateCoolDownTime = 300000;

// const currentProposals = new Set();

// const functions = {
//   relationship: (target, relationship, msg, client) => {
//     let user1 = msg.author;
//     let user2 = msg.mentions.users.first();

//     // TODO: Check for existing relationship
//     if(await db.checkForRelationship(user1, user2, relationship)) {
//       // TODO: If new relationship, send confirmation message
//       let confirmMessage = `<@${user2.id}>, ${user1.tag} has asked to be your ${relationship}. Do you accept? mfe! yes or mfe! no`;
//       msg.channel.send(confirmMessage);

//       // TODO: Add cooldown for question
//       relateCooldown(`${user1}-${user2}-${relationship}`, user1.id, user2.id, relationship);

//     }
//     else {
//       let error = `<@${user1.id}> that relationship already exists`;
//       msg.channel.send(error);
//     }

//   },
//   yes: (user2, msg, client) => {
//     // TODO: Search for current relationship request 

//     // TODO: Create relationship


//     // TODO: Send confirmation
//   },
//   no: (user2, msg, client) => {
//     // TODO: Send rejection 
//   }
// }


// async function checkForCooldown(msg, user2, relationship) {
//   // If current question
//   if(relateCoolDowns[JSON.stringify(`${user1}-${user2}-${relationship}`)] != undefined) {
//     // Evaluate answer
//     if(msg.content.toLowerCase() == 'yes') {
//       // Yes
//       console.log("Said Yes. Record in DB");
//     }
//     else if(msg.content.toLowerCase() == 'no') {
//       // No
//       console.log("Said No.");
//     }
//     else {
//       // Answer not valid
//       console.log("Answer not valid");
//     }
//   }
//   else {
//     // Do nothing
//   }
// }

// function sendConfirmation(msg, client, relationship) {

// }

// function relateCooldown(cooldownObj, user1, user2, relationship) {
//   currentProposals.add(cooldownObj);
//   relateCoolDowns[cooldownObj] = {
//     'user1': user1,
//     'user2': user2,
//     'relationship': relationship,
//     'timer': setTimeout(() => {
//       currentProposals.delete(cooldownObj);
//       delete relateCoolDowns[cooldownObj];
//     }, relateCoolDownTime)
//   }
// }

// module.exports = functions;
