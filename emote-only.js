

module.exports = (msg, client) => {
  let msgCheck = msg.content.replace(/:[^:\s]+:|<:[^:\s]+:[0-9]+>|<a:[^:\s]+:[0-9]+>/g, '').replace(/\s+/g, '');
  let stockEmoteCheck = /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/g.test(msg.content);

  if(!stockEmoteCheck && msgCheck) {
    // contains text that isn't an emote
    msg.delete()
      .then(msg => console.log(`Deleted message from ${msg.author.username}: ${msg.content}`))
      .catch(console.error);
  }
  else {
    
  }
}