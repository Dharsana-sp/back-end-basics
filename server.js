const express = require('express');
const app = express();
/* app.set ('View engine','ejs'); */
app.get('/',(req,res)=>{
    console.log("Boo Boo");
    /* res.status(500).send("error occured") */
    /* res.status(200).send({error:"Hello world"}); */
   /*  res.json(200).send({express:"Hello world"}); */
   /* res.send("Chum") */
   /* res.render("index.ejs",{text:"World"}); */
   res.send("hello world");

});
const userRoute=require('./Routes/user');
app.use('/user',userRoute);
app.listen(3000);