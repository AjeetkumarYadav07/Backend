
      // ====npm  package use ---==

// var oneLinerJoke = require('one-liner-joke');
// console.log (oneLinerJoke.getRandomJoke({
//     'exclude_tags':[ 'funny']
// }));

 
  // -----Create routes ====


  // const ex = require('express');
  //   const app = ex();
  //    app.get("/", function(req , res ){
  //       res.send ('hello form mre');

  //    })



    //   ------How ejs work ----

    // =-==Make sure to install   npm instal ejs =====
    
//       const express = require('express');
// const app = express();

// app.set('view engine', 'ejs'); // Fix typo here

// app.get("/", (req, res) => {
//   res.send("hello");
// });

// app.get("/hello", (req, res) => { // Fix route path here
//   res.render("index");
// });

// app.listen(3000);



  //    const express = require('express');
  //  const app = express();
  //   app.get ("/" , function (req , res){
  //       res.send("Hello i'm backend😄. how are u guy's ?  (from backend side... )  ");
  //   });
        

  //      app.get("/profile" , function (req ,res ){
  //       res.send("hello from prfile ");
  //      });
      
  //      app.get("/new", function(req, res ){
  //       res.send("hello get ijn");
  //      });
         
  //      app.get(" * ", function (req , res ){
  //       res.send("this page is not found");
  //      });

  //      app.get("/ajeet" , function (req , res ){
  //       res.send("this page her ");
  //      });
  //   app.listen(4000);

         
       

         

      //  ----Route Parameters ---

      app.get("/profile/:username" , function (req ,res ){
        res.send(`Heloo from ${req.params.username}`);
       });
          
      //  ---Route parameters use for any route dynamic you
      //  can use : at the palce where you want to make it dynamic. 




      // -----how to run ejs -----
         
//  const express = require('express')
//  const app = express();

//    app.set("view engine " , "ejs");
//    app.get('/', function (req , res ){
//        res.send("hello from bakcned ");
//    })

  

  // ---Conncet ejs with script js -----
   
  app.set('view engine', 'ejs');

  // Serve static files from the 'public' directory
  app.use(express.static('./public'));
  
  app.get("/" , (req , res )=>{
     res.send("helo weclome to profiel")
  })
  app.get("/contact", (req, res) => { 
    res.render("contact"); // Assuming you have a 'contact.ejs' file in your 'views' directory
  });
  
  app.get("/error" ,( req , res)=>{
      res.render("error");
  });
//    app.listen(3000);