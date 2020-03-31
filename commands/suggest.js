const { User } = require('discord.js');

module.exports = async (msg, client) => {
  // console.log(client);
  let myUser = await client.users.fetch('615687360138575893');
  myUser.send('Test');
  
}