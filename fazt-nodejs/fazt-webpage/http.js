/* Crear mi primer servidor con node.js. Aqui se presenta 
    la function de callback incluida en el argumento de createServer

const http = require('http');

http.createServer(function(request, response){
    response.writeHead(200, {'Content-type':'text/html'});
    response.write('<h1>Hola mundo desde http.js<h1>');
    response.end();
}).listen(3000); */

/* Creando servidor con node.js más optimizado
const http = require('http');
const colors = require('colors');
const handleServer = function(request, response){
    response.writeHead(200, {'Content-type':'text/html'});
    response.write('<h1>Hola mundo desde http.js<h1>');
    response.end();
}
const server = http.createServer(handleServer);
server.listen(3000, function(){//servidor escuchando peticiones
    console.log('Server en el puerto 3000'.green);
}); */

const express = require('express');
const colors = require('colors');
const server = express();

server.get('/', (request,response)=>{
    response.send('<h1>Hola Eduardo</h1>');
})

server.listen(3000, ()=>{
    console.log('Servidor on port 3000'.cyan);
})