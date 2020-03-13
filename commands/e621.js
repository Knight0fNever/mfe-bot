const fetch = require('node-fetch');
const { embedBuilder } = require('../helper');
let client = null;

module.exports = (search, msg, parent_client) => {
  client = parent_client;
  if(msg.channel.id != "598847956996718628" && msg.channel.id != "638739285343993886") {
    let search_string = search.toString().replace(/,/g, ' ').concat(' -female -cub');
    // console.log(search_string.replace(/ /g, '+'));
    let url = `https://e621.net/posts.json?tags=${search_string.replace(/ /g, '+')}&limit=150`;
    // console.log(url);
    fetch(url, {
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'mfe-bot/1.0 (by furryknight3 on e621)',
        "Authorization": "Basic ZnVycnlrbmlnaHQzOmEzNzQ5NmYwZDVmM2E1YTkxMmYyNTA4ZGNmZDNlZmIy"
      },
      method: 'get'
    })
    .then(res => res.json())
    .then(json => json.posts)
    .then((posts) => {
    let embed = null;
    //  console.log(posts);
    let post = posts[Math.floor(Math.random() * posts.length)];
    // console.log(`URL: ${post.file.url}`);
    if(post.file.url.substring(post.file.url.length - 4) != `webm`) {
      embed = embedBuilder(`e621`, msg.author, `RANDOM`, ``, post.file.url, [{"name": "Link: ", "value": `https://e621.net/posts/${post.id}`}]);
    }
    else {
      embed = embedBuilder(`e621`, msg.author, `RANDOM`, ``, post.file.url, [{"name": "Link: ", "value": `https://e621.net/posts/${post.id}`}, {"name": "WEBM", "value": "This post contains a webm. If you cannot see it, please click on the link to be taken to the e621 webpage."}]);
    }
    
    msg.channel.send(embed);
    });
  }
  else {
    msg.channel.send("Please keep this command in NSFW areas!");
  }
  
}