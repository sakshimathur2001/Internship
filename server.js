//to run this app use nodemon server.js
const express=require('express');
const app=express();
app.set('view-engine', 'ejs')

app.get("/", function(req,responce){
    responce.render('home.ejs',{data:'Hello World!'});
  });
app.listen(3000,function(){
    console.log("sever started at port 3000");
  });
