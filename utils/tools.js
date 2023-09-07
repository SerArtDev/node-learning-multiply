const wrapInBoxUnicode = (text = "", style = "light") => {
    /**
     * Función para encerrar un texto en una caja unicode.
     * @param {string} text - a convertir
     * @param {string} style [ligth, thick, double]
     */
    const styles = [
        {
            name: "light",
            lt: "┌", tb: "─", rt: "┐",
            lr: "│",
            lb: "└",          rb: "┘"
        },
        {
            name: "thick",
            lt: "┏", tb: "━", rt: "┓",
            lr: "┃",
            lb: "┗",          rb: "┛"
        },
        {
            name: "double",
            lt: "╔", tb: "═", rt: "╗",
            lr: "║",
            lb: "╚",          rb: "╝"
        }
    ];

    //se busca el estilo en el arreglo
    const styleUsed = styles.find((e) => e.name === style);
    if (!styleUsed) {
        return text;
    }

    text = text.split("\n")//Separamos por renglones

    //buscamos el renglón con más caracteres
    const maxLength = Math.max(...text.map(e => e.length)); 
    //barra superior
    let wrappedText = styleUsed.lt;
    for (let i = 0; i < maxLength; i++) {
        wrappedText += styleUsed.tb;
    }
    wrappedText += styleUsed.rt + "\n";
    //cuerpo
    for (let i = 0; i < text.length; i++) {
        wrappedText += styleUsed.lr;
        wrappedText += text[i];
        for (let j = 0; j < maxLength - text[i].length; j++) {
            wrappedText += " ";   
        }
        wrappedText += styleUsed.lr + "\n";
    }
    //barra inferior
    wrappedText += styleUsed.lb;
    for (let i = 0; i < maxLength; i++) {
        wrappedText += styleUsed.tb;
    }
    wrappedText += styleUsed.rb;

    return wrappedText;
}

const multiplyTable = (base = 5, max=10) => {
    let str = `Tabla del ${base}\n`;
    for (let i = 1; i <= max; i++) {
        str += `\n${base} x ${i} = ${base*i}`
    }
    return str;
}

module.exports = {
    wrapInBoxUnicode,
    multiplyTable
}