const express = require('express');

const app = express();
const port = 3100;
app.get('/',(req,res)=>{
    res.send("<h1>Welcome to github actions</h1>")
})
app.get('/dashboard',(req,res)=>{
    res.send("<h1>Dashboard</h1>")
})
app.get('/home',(req,res)=>{
    res.send("<h1>home</h1>")
})
app.get('/contact',(req,res)=>{
    res.send("<h1>contact</h1>")
})
app.listen(port,()=>{
    console.log(`App running on ${port}`);
})