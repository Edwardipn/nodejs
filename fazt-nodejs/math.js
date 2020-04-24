/* ejercicio 1: se obserbó que 
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
exports.divide = divide;