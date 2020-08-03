// node keyword require allows us to import modules

// const myModule = require('./myModule.js')
// const fs = require('fs');

// fs.readFile('story.txt', 'utf8', (err, data)=> {
//   if(err) {
//     console.log("There was a problem reading the file")
//   } else {
//     console.log(data)
//   }
// })


// myModule.count()

// console.log(myModule.beBasic())

// console.log("Hello, world!")


// let i = 0;

// const count = () => {
//   console.log(i);
//   i++;
// };

// const myTimer = setInterval(count, 1000)

const moment = require("moment");

console.log(
  moment("04-13-1999").format("dddd [the] Do [of] MMMM [in the year] YYYY")
);
