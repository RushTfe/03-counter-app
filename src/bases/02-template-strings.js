const nombre =      'Pedro!';
const apellido =    'Galindo';

//const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = ` 
${nombre} 
${apellido} 
${1 + 1}
`;

//console.log(nombreCompleto);

export function getSaludo ( nombre = 'Carlos') {
    return 'Hola ' + nombre + '!';
}

//console.log(`Esto es un texto: ${getSaludo(nombre)}`);