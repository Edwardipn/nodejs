//aqui se comprende que Node.js se ejecuta atraves de procesos
//y javascript atraves dej navegador


/* Node.js cuenta con un objeto global que se llama process: 
    el cual nos permite obtener información del ambiente donde 
    esta siendo ejecutado*/
//console.log(process.argv);imprime el resultado de process.argv

/* la siguiente es la forma de obtener los argumentos de un proceso
function parameter(p){
    var index = process.argv.indexOf(p);//me da el indice del 
    //parametro p
    return process.argv[index + 1];
}
var nombre = parameter('--nombre'), edad = parameter('--edad'); 
console.log(`Tu nombre es ${nombre} y tienes ${edad} años.`); */
