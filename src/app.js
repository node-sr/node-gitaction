const express = require('express');

const app = express();
const port = 3100;
app.get('/',(req,res)=>{
    res.send({msg:'Welcome to express app'})
})
app.listen(port,()=>{
    console.log(`App running on ${port}`);
})