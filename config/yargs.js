const argv = require('yargs')
  .options('b', {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: 'Esla base de la tabla de multiplicar'
  })
  .option('l',{
      alias:'listar',
      type:'boolean',
      demandOption: true,
      describe:'Muestra los datos de tabla',
      default:false
  })
  .option('h',{
      alias:'hasta',
      type:'number',
      default:10,
      describe:'Hasta donde se va imprimir',

  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "la base tiene que ser un número";
    }
    return true;
  }).argv;

  module.exports=argv;