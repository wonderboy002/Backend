const express=require("express");
const app=express();
require('dotenv').config();
// const port=3000;

app.listen(process.env.PORT,()=>{
    console.log(`App listening on port ${process.env.PORT}`);
});

app.get('/',(req,res)=>{
    res.send("<h1>Welcome to our app!!!</h1>");
});

app.get('/coffee',(req,res)=>{
    res.send("<center><p>Here is Your coffee</p></center>")
})

app.get('/Login',(req,res)=>{
    res.send("Login here");
})