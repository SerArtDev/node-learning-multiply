const argv = require('yargs')
    .option('b', {
        alias: 'base', //Se puede ingresar b o base (--, -) para referirse al mismo argumento
        type: 'number', //El valor ingresado es convertido a número, si no es posible, será NaN
        demandOption: true, //La opción es obligatoria
        describe: 'Número base para la tabla de multiplicar'
    })
    .option('m', {
        alias: 'max',
        type: 'number',
        default: 10, //valor por defecto
        describe: 'El múltiplo máximo'
    })
    .option('l', {
        alias: 'list',
        type: 'boolean',
        default: false,
        describe: 'Imprimir en consola la tabla'
    })
    .check( (argv, options) => { //Hace un chequeo de los argumentos ingresados
        if (isNaN(argv.b)) {
            throw 'La base tiene que ser un número';
        }
        if (isNaN(argv.m)){
            throw 'El número máximo tiene que ser un número';
        }
        return true; //Se retorna true si están bien ingresados los argumentos
    })
    .argv;

module.exports = argv;