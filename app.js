const { argv } = require( './config/yargs' );
const colors = require( 'colors' );
const porHacer = require( './por-hacer/por-hacer' );

let comando = argv._[ 0 ].toLowerCase();

switch( comando ) {
    case 'crear':
        console.log( `Creando [${ argv.descripcion }]...` );
        let tarea = porHacer.crear( argv.descripcion );
        console.log( tarea );
        break;
    
    case 'listar':
        console.log( 'Listando...' );
        let listado = porHacer.getListado();
        for( let tarea of listado ) {
            console.log( '======Por Hacer======'.cyan );
            console.log( tarea.descripcion );
            console.log( 'Estado: ', tarea.completado );
            console.log( '======================\n'.cyan );
        }
        break;

    case 'actualizar':
        console.log( 'Actualizando...' );
        let actualizado = porHacer.actualizar( argv.descripcion, argv.completado );
        console.log( actualizado );
        break;

    case 'borrar':
        console.log( 'Borrando...' );
        let borrado = porHacer.borrar( argv.descripcion );
        console.log( borrado );
        break;

    default:
        console.log( `No se reconoce el comando "${ comando }"` );
}