
const express = require('express');
const app = express();

//settings
app.set('port',3000);

//middleware

//routes
app.get('/', (req,res)=>{
    res.send('<h1>Hello World !</h1>')
});

//listening server
app.listen(app.get('port'), ()=>{
    console.log('Server listening!');
});