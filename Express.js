const express = require('express');
const app = express();

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


app.listen(4000, () => {
  console.log('Server is running on port 4000');
});


// app.get("/", (req, res) => {
//  res.render("index");
// });
 
  