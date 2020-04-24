/* Vamos a aprender el input y el output en Node.js */
/* 
var nombre;
process.stdout.write('Soy process.stdout.write\n');

process.stdout.write('¿Cual es tu nombre? ');

process.stdin.on('data', function(data){
    nombre = data.toString().trim();
    process.stdout.write(`¡Hola ${nombre}!`);
    process.exit();
});  */

var respuestas = [];

var preguntas = ['¿Cuál es tu nombre?: ',
                '¿Cuantos años tienes?: ',
                '¿Cual es tu lenguaje de programación favorito?: '];

function pregunta (i){
    process.stdout.write(preguntas[i]);
}

process.stdin.on('data', function(data){
    respuestas.push(data.toString().trim());
    if(respuestas.length < preguntas.length){
        pregunta(respuestas.length);
    }else{
        process.exit();
    }
});

pregunta(0);