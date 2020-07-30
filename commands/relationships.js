const fs = require('fs').promises;
const { embedBuilder } = require("../helper");
const db = require('../db/db');

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


function sendConfirmation(msg, client, relationship) {

}

module.exports = functions;
