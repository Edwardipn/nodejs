/* ejplo 1: se validó el uso de las comillas invertidas
    para evitar la concatenación
var a=5,b=8;
console.log(`El resultado es ${a+b} ` +(a+b)); */

/* ejplo 2: se vió que node.js tiene un scope global
    que a diferencia de JavaScript Web, en node.js nosotros 
    ya tenemos acceso a una cierta camtidad de funciones, 
    constantes y variables 
    
console.log(__dirname);// __dirname es una variable que existe
//de forma global aq lo largo de toda la aplicación
console.log(__filename);*/

/* Los modulos son fragmentos de código que nos permiten extender 
    las funcionalidades en nuestras aplicaciones, esto se realiza 
    con require(es equivalente a import en java), exports, etc.*/
var path = require("path");//path es un modulo contiene la direcciones
// de los archivos
console.log(path.basename(__filename));