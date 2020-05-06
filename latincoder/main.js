var EventEmitter = require('events');//modulo emisor de eventos
var util = require('util');// util sirve para hacer herencia

var Arreglo = function(valor){
    this.data = [];
};

Arreglo.prototype.add = function (valor) {
  this.data.push(valor);  
}; 