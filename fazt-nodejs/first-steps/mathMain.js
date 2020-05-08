//ejercicio 1: imprime hola mundo
//console.log('Hola a todo el Mundo');



/* ejercicio 2: ejecutando los procesos de cada function
const math = require('./math.js');

console.log(math.add(3,2));
console.log(math.substract(3,2));
console.log(math.multiply(3,2));
console.log(math.divide(3,0));
console.log(math.divide(3,6)); */

/* ejercicio 3: obtenemos las caracteristicas del modulo math
y vemos que es un objeto de varias functions 

const math = require('./math.js');
console.log(math)//esta linea obtiene las caracteristicas de math
 */

/* ejercicio 4: otra forma de hacer el ejercicio 2 con un solo export en math.js*/
const math = require('./math.js');//para que node encuentre archivos en la misma carpeta se indica con "./"
console.log(math); 

console.log(math.add(3,2));
console.log(math.substract(3,2));
console.log(math.multiply(3,2));
console.log(math.divide(3,0));
console.log(math.divide(3,6));//*/

