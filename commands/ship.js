import mergeImg from 'merge-img';

module.exports = (first, second, msg, client) => {
  console.log(`First: ${first} | Second: ${second}`);
  let randomNumber = Math.floor(Math.random() * 100) + 1;
  let firstUser = await client.users.fetch('615687360138575893');


  mergeImg(['image-1.png', 'image-2.jpg'])
  .then((img) => {
    // Save image as file
    img.write('out.png', () => console.log('done'));
  });



}