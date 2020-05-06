const fs = require('fs');
/* crear y escribir archivo fsCreado.txt  */
fs.writeFile('./fsCreado.txt','primera linea',function(err){
    if(err){
        console.log(err);
    }else{
        console.log('Archivo creado');
    }
});

console.log('Ultima linea de código');

/* leer archivo fsCreado.txt */
fs.readFile('./fsCreado.txt', function(err,data){
    if(err){
        console.log(err);
    }
    console.log(data.toString());
});