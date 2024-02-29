const express = require('express');
   const app = express();
    app.get ("/" , function (req , res){
        res.send("Hello i'm backend😄. how are u guy's ?  (from backend side... )  ");
    });
        

       app.get("/profile" , function (req ,res ){
        res.send("hello from prfile ");
       });


    app.listen(4000);
