const fs = require('node:fs');
const { wrapInBoxUnicode, multiplyTable } = require('./tools.js');
const colors = require('colors');

const exportMultiplyTable = async (base=5, max=10, prnt=false) => {
    const str = wrapInBoxUnicode(multiplyTable(base, max));
    const outDir = './out/'
    const fileName = `tabla-del-${base}.txt`;

    if (prnt){
        console.log(str); 
     }

    try {
        fs.writeFileSync(outDir + fileName, str);
        return `Archivo "${fileName.green}" creado ${"satisfactoriamente".yellow}.`;
    } catch (error) {
        throw `No se pudo crear "${fileName}" con contenido:\n${str}\n\n${error}`
    }
} 

module.exports = {
    exportMultiplyTable
}