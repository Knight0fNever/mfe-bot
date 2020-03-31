

module.exports = (msg, client) => {
  let msgCheck = msg.content.replace(/:[^:\s]+:|<:[^:\s]+:[0-9]+>|<a:[^:\s]+:[0-9]+>/g, '').replace(/\s+/g, '');
  if(msgCheck) {
    // contains text that isn't an emote
    msg.delete()
      .then(msg => console.log(`Deleted message from ${msg.author.username}`))
      .catch(console.error);
  }
  else {
    // is only emotes
  }
}