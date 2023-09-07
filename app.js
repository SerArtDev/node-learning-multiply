const { exportMultiplyTable } = require('./utils/exportFiles.js');
const argv = require('./config/yargs.js');

exportMultiplyTable(argv.b, argv.m, argv.l)
    .then( msg => console.log(msg))
    .catch( err => console.log(err));