const express = require('express');

const app = express();
const port = 3100;
app.get('/',(req,res)=>{
    res.send("<h1>Welcome to express app</h1>")
})
app.listen(port,()=>{
    console.log(`App running on ${port}`);
})