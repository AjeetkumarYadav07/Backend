
// var oneLinerJoke = require('one-liner-joke');
// console.log (oneLinerJoke.getRandomJoke({
//     'exclude_tags':[ 'funny']
// }));

  const ex = require('express');
    const app = ex();
     app.get("/", function(req , res ){
        res.send ('hello form mre');

     })
           app.listen(6000);
  