/* ejercicio 2: para responder al ejercicio 2 se aplicó exports a cada función

function add(x1, x2){
    return x1+x2;
}

function substract(x1,x2){
    return x1-x2;
}

function multiply(x1,x2){
    return x1*x2;
}

function divide(x1, x2){
    if (x2==0) {
        console.log('x2 no puede ser cero');
    } else {
        return x1/x2;        
    }
}

exports.add = add;
exports.substract = substract;
exports.multiply = multiply;
exports.divide = divide; */

/* ejercicio 4: se exportará el objeto math completo en lugar de cada funcion individual*/
//declarando el objeto math
const Math = {};
function add(x1, x2){
    return x1+x2;
}

function substract(x1,x2){
    return x1-x2;
}

function multiply(x1,x2){
    return x1*x2;
}

function divide(x1, x2){
    if (x2==0) {
        console.log('x2 no puede ser cero');
    } else {
        return x1/x2;        
    }
}
//agregando propiedades al objeto Math
/* exports.add = add;
exports.substract = substract;
exports.multiply = multiply;
exports.divide = divide;  */
// exportando el modulo Math
Math.add = add;
Math.substract = substract;
Math.multiply = multiply;
Math.divide = divide;

module.exports = Math;
//*/