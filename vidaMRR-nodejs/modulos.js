/* Los modulos son fragmentos de código que nos permiten extender 
    las funcionalidades en nuestras aplicaciones, esto se realiza 
    con require (que es equivalente a import en java), tambien se 
    utiliza exports, etc. */
/* Si se va a declarar un modulo siempre se asociara a una variable,
    en este caso el modulo se llama path y por convención a la variable
    se le asignará el mismo nombre 
    var path = require('path');
    //Uso del modulo path
    console.log(path.basename (__filename));
    console.log(path.join(__dirname, 'org', 'node', 'js'));//*/

/*  */
    var path = require('path');
    var util = require('util');
    var v8 = require('v8');

    //ejemplo de uso acerca de modulos
    var nombre = "Eduardo";
    var edad =25;
    var texto = util.format("Hola %s, tienes %d años", nombre, edad);
    process.stdout.write(texto);
    console.log(v8.getHeapStatistics());
    //*/