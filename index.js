var express = require('express');
var app = express();

app.get('/',(req,res)=>{

    res.send('Project Init')
})

app.listen(9999,()=>{
    console.log('http://localhost:9999')
})