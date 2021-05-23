//const fs = require('fs');//importacion
//const { argv } = require("process");
const { options, boolean } = require("yargs");
const colors = require('colors');
const { crearArchivo } = require("./helpers/multiplicar");
const argv = require('./config/yargs');
//con los yargs pedemo crear nuestro propios comando de consola y mostrarlos a user --help

//para usar yargs
//npm i yargs
//cortamos lo de yargs y lo pegamos en otro archivo en config

console.clear();

//console.log(process.argv);//usando procesos
//console.log(argv);

//console.log("base: yargs", argv.b);
// const [, , arg3='base=5']=process.argv;
// const [, base=5]= arg3.split('=');
// console.log(base);

//let base =7;

crearArchivo(argv.b, argv.l, argv.h)
  .then((nombreArchivo) => console.log(nombreArchivo.rainbow, "creado"))
  .catch((err) => console.log(err));
