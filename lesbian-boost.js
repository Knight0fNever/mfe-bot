module.exports = (msg, client) => {
  if(msg.content.toLowerCase() != 'lesbian boost' && !msg.author.bot) {
    // contains text that isn't lesbian boost
    msg.delete()
      .then(msg => console.log(`Deleted message from ${msg.author.username}: ${msg.content}`))
      .catch(console.error);
  }
  else {
    
  }
}