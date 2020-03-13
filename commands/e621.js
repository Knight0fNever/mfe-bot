const fetch = require('node-fetch');
const { embedBuilder } = require('../helper');
require('dotenv').config()
let client = null;

module.exports = (search, msg, parent_client) => {
  client = parent_client;
  if(msg.channel.id == "601680856817467393" || msg.author.id == "615687360138575893") {
    let search_string = search.toString().replace(/,/g, ' ').concat(' -female -cub');
    // console.log(search_string.replace(/ /g, '+'));
    let url = `https://e621.net/posts.json?tags=${search_string.replace(/ /g, '+')}&limit=150`;
    // console.log(url);
    fetch(url, {
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'mfe-bot/1.0 (by furryknight3 on e621)',
        "Authorization": `Basic ${process.env.E621_AUTH}` 
      },
      method: 'get'
    })
    .then(res => res.json())
    .then(json => json.posts)
    .then((posts) => {
    let embed = null;
    //  console.log(posts);
    let post = posts[Math.floor(Math.random() * posts.length)];
    let result_count = 0;
    if(posts.length == 150) {
      result_count = "150+";
    }
    else {
      result_count = posts.length;
    }
    // console.log(`URL: ${post.file.url}`);
    if(posts.length == 0) {
      msg.channel.send("No results!");
    }
    else if(post.file.url.substring(post.file.url.length - 4) != `webm`) {
      embed = embedBuilder(`e621`, msg.author, `RANDOM`, ``, post.file.url, [{"name": "Number of results:", "value": result_count}, {"name": "Link: ", "value": `https://e621.net/posts/${post.id}`}]);
      msg.channel.send(embed);
    }
    else {
      embed = embedBuilder(`e621`, msg.author, `RANDOM`, ``, post.file.url, [{"name": "Number of results:", "value": result_count}, {"name": "Link: ", "value": `https://e621.net/posts/${post.id}`}, {"name": "WEBM", "value": "This post contains a webm. If you cannot see it, please click on the link to be taken to the e621 webpage."}]);
      msg.channel.send(embed);
    }
  
    });
  }
  
}