let express = require('express');
let app = express();

app.get('/',(req,res)=>{
    res.send('hello')
})

app.listen('80',()=>{
    console.log('run on port-80');
})