"use strict"

function producto(nombre,cantidad){
    this.nombre = nombre;
    this.cantidad = cantidad
}

const producto2 = new producto("PlayStation 5",1);

console.log(producto2.nombre);