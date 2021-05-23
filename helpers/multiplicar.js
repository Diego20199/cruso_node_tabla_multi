const fs = require("fs"); //importacion

const crearArchivo = async (base = 5, listar = false, hasta=10) => {
  try {
    let salida = "";
    for (let i = 1; i <= hasta; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
    }
    if (listar) {
      console.log(salida);
    }
    //para grabar dato en un archivod e texto
    //es este caso al usar sync se debe usar try y catch
    fs.writeFileSync(`./salida/tabla_${base}.txt`, salida);
    return `tabla_${base}.txt creado`;
  } catch (error) {
    throw error;
  }
};
//con eso podemo exporta esta funcion a los demas archivos de nuesntro proyecto
module.exports = {
  crearArchivo, //es lo mismo que crearArchivo: crearArchivo, si tienen el mismo nombre se peude hacer eso
};
