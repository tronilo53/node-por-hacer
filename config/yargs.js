const DESCRIPCION = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};
const COMPLETADO = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
};

const argv = require( 'yargs' )
    .command( 'crear', 'Crear una lista de tareas', { descripcion: DESCRIPCION } )
    .command( 'actualizar', 'Actualizar una lista de tareas', { descripcion: DESCRIPCION, completado: COMPLETADO } )
    .command( 'borrar', 'Borrar una lista de tareas', { descripcion: DESCRIPCION } )
    .help()
    .argv;

module.exports = { argv };
