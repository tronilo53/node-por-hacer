const { error } = require('console');
const fs = require( 'fs' );

let listadoPorHacer = [];

const guardarDB = () => {

    return new Promise( ( resolve, reject ) => {

        let data = JSON.stringify( listadoPorHacer );

        fs.writeFile( 'db/data.json', data, ( err ) => {
            if( err ) reject( `No se pudo crear el archivo. Error: \n ${ err }` );
            else resolve( 'Tarea creada con éxito' );
        } );

    } );

};

const cargarDB = () => {

    try {

        listadoPorHacer = require( '../db/data.json' );
        
    } catch (error) {
        
        listadoPorHacer = [];

    }

};

const crear = descripcion => {

    cargarDB();

    let porHacer = { descripcion: descripcion, completado: false };

    listadoPorHacer.push( porHacer );

    guardarDB()
        .then( mensaje => console.log( mensaje ) )
        .catch( error => console.log( error ) );

    return porHacer;

};

const getListado = () => {

    cargarDB();

    return listadoPorHacer;

};

const actualizar = ( descripcion, completado ) => {

    cargarDB();

    let index = listadoPorHacer.findIndex( tarea => tarea.descripcion === descripcion );

    if( index >= 0 ) {

        listadoPorHacer[ index ].completado = completado;

        guardarDB();

        return true;
    }else return false;

};

const borrar = descripcion => {

    cargarDB();

    let index = listadoPorHacer.findIndex( tarea => tarea.descripcion === descripcion );

    if( index >= 0 ) {

        listadoPorHacer.splice( index, 1 );

        guardarDB();

        return true;
    }else return false;

};

module.exports = { crear, getListado, actualizar, borrar };