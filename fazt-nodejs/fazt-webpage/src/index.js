
const express = require('express');
const server = express();
const path = require('path');

//settings de express
server.set('port',3000);
server.set('views',path.join(__dirname,'views'));
server.engine('html', require('ejs').renderFile);
server.set('view engine', 'ejs');

//middleware

//routes
server.use(require('./routers/router'));

//listening server
server.listen(server.get('port'), ()=>{
    console.log('Server listening!');
});