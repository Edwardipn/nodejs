/* Readline nos hace mas eficiente la i/o de datos */

/* Ejemplo con readline.
console.log("inicio");
var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

 rl.question('¿Cuál es tu nombre?:' ,(respuesta)=>{
    console.log(`Hola, ${respuesta}`);
    process.exit();
});  */

/*aplicación que toma los comentarios y los imprime en pantalla
  a fin de mostrar el uso de readline en input y output*/ 
var util = require('util');
var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

var persona = {
  nombre: '',
  comentarios: []
};

rl.question('¿Cuál es tu nombre?: ' ,(respuesta)=>{
  persona.nombre = respuesta;
  rl.setPrompt('¿Tienes algún comentario?: ');
  rl.prompt();

});

rl.on('line', (input)=>{ 
  if(input.trim()==='s'){
    var mensaje = util.format("Hola %s, estos son tus comentarios: %j",
    persona.nombre, persona.comentarios);
    console.log(mensaje);
    process.exit();
  }  
  persona.comentarios.push(input.trim());
  rl.setPrompt('¿Tienes algún comentario?: ');
  rl.prompt();
});
  
// */