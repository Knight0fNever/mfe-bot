const fetch = require('node-fetch');
const { embedBuilder } = require('../helper');
require('dotenv').config();
let client = null;

module.exports = (search, msg, parent_client) => {
  client = parent_client;
  let channel_whitelist = ['601680856817467393', '638747904969932840', '678743526254575617', '437808447745032205', '640605618553749534', '640637137502601216'];
  let searcg_string = search.concat(' -female -cub -young -teen -feral -shota -futa -scat -gore -webm -flash -baby_pok%C3%A9mon -not_furry -digimon_%28species%29');
  if (channel_whitelist.includes(msg.channel.id)) {
    // console.log(search_string.replace(/ /g, '+'));
    let url = `https://e621.net/posts.json?tags=${searcg_string.replace(/ /g, '+')}&limit=320`;
    console.log(url);
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
        if (posts == undefined) {
          msg.channel.send("Error!");
        }
        else {
          let post = posts[Math.floor(Math.random() * posts.length)];
          let result_count = 0;
          if (posts.length == 320) {
            result_count = "320+";
          }
          else {
            result_count = posts.length;
          }

          let embedFieldArray = [{ "name": "Number of results:", "value": result_count }, { "name": "Link: ", "value": `https://e621.net/posts/${post.id}` }];


          // console.log(`URL: ${post.file.url}`);
          if (posts.length == 0) {
            msg.channel.send("No results!");
          }
          else if (post.file.url.substring(post.file.url.length - 4) != `webm`) {
            embed = embedBuilder(`e621`, msg.author, `RANDOM`, ``, post.file.url, embedFieldArray);
            msg.channel.send(embed);
          }
          else {
            embedFieldArray.push({ "name": "WEBM", "value": "This post contains a webm. If you cannot see it, please click on the link to be taken to the e621 webpage." });
            embed = embedBuilder(`e621`, msg.author, `RANDOM`, ``, post.file.url, embedFieldArray);
            msg.channel.send(embed);
          }
        }

      });
  }

};