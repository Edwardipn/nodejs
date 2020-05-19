/* requiriendo express */
const express = require('express');
/* inicializando express */
const server = express();

/* respuestas del servidor para la vista */
server.get('/', (request, response)=>{
    response.end('Ingeniero Eduardo');
    console.log('Hola Eduardo');
});

server.get('/login', (request,response)=>{
    response.end('<h1>Esta es la vista de login</h1>');
})

server.get('*', (request,response)=>{
    response.end('La ruta no esta especificada');
})
/* servidor activo */
server.listen(3000, ()=>{
    console.log('servidor activo ');
});

/* asignando un path */