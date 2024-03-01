const express = require('express');
   const app = express();
    app.get ("/" , function (req , res){
        res.send("Hello i'm backend😄. how are u guy's ?  (from backend side... )  ");
    });
        

       app.get("/profile/:username" , function (req ,res ){
        res.send(`Heloo from ${req.params.username}`);
       });
       
       app.get("/new", function(req, res ){
        res.send("hello get ijn");
       });
         
       app.get(" * ", function (req , res ){
        res.send("this page is not found");
       });

    app.listen(4000);
