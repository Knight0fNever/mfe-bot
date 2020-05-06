const fetch = require('node-fetch');
require('dotenv').config()

function e621(msg, args) {
  let channel_whitelist = ['663923940841750570','601680856817467393', '638747904969932840', '678743526254575617', '437808447745032205', '640605618553749534'];
  if (channel_whitelist.includes(msg.channel.id)) {
    console.log(args);
    let search_string = args.toString().replace(/,/g, ' ').concat(' -female -cub');
    let url = `https://e621.net/posts.json?tags=${search_string.replace(/ /g, '+')}&limit=150`;
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
        let post = posts[Math.floor(Math.random() * posts.length)];
        let result_count = 0;
        if (posts.length == 150) {
          result_count = "150+";
        }
        else {
          result_count = posts.length;
        }
        if (posts.length == 0) {
          msg.channel.createMessage("No results!");
        }
        else if (post.file.url.substring(post.file.url.length - 4) != `webm`) {
          embed = {
            "embed": {
              "description": "e621",
              "color": 2523978,
              "image": {
                "url": post.file.url
              },
              "author": {
                "name": `${msg.author.username}#${msg.author.discriminator}`,
                "icon_url": msg.author.avatarURL
              },
              "fields": [
                {
                  "name": "Number of results:",
                  "value": result_count
                },
                {
                  "name": "Link",
                  "value": `https://e621.net/posts/${post.id}`
                }
              ]
            }
          }
          msg.channel.createMessage(embed);
        }
        else {
          embed = {
            "embed": {
              "description": "e621",
              "color": 2523978,
              "author": {
                "name": `${msg.author.username}#${msg.author.discriminator}`,
                "icon_url": msg.author.avatarURL
              },
              "fields": [
                {
                  "name": "Number of results:",
                  "value": result_count
                },
                {
                  "name": "Link",
                  "value": `https://e621.net/posts/${post.id}`
                },
                {
                  "name": "WEBM",
                  "value": `This post contains a webm. If you cannot see it, please click on the link to be taken to the e621 webpage.`
                }
              ]
            }
          }
          msg.channel.createMessage(embed);
        }
      });
  }

}

function test(msg, args) {
  console.log(args);
}

module.exports = {
  "name": "e621",
  "command": e621,
  "options": {
    description: "e621",
    fullDescription: "Searches e621 for the tags entered and then returns a random result",
    usage: "<tags (up to 3)>"
  }
}