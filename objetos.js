"use strict"
const tenistas = {
    Nombre:"Jannik",
    Apellido:"Sinner",
    Ranking:1,
    torneos:{
        australianOpen:"Campeon",
        rotterdam:"Campeon",
        masterMiami:"Campeon",
        halle:"Campeon",
        masterCincinnati:"Campeon"
    }
};

Object.freeze(tenistas);

tenistas.pais = "Italia";

delete tenistas.pais;

console.log(tenistas.torneos);

const {Nombre} = tenistas;

console.log(Nombre);

const {torneos:{halle}} = tenistas;

console.log(halle);