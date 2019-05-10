const express = require('express');
const app = express();

app.get('/',(req,res)=>res.send('hello world11111111!'));

app.listen(7777,()=>console.log('app listening on port 7777!'));
