const personajes = ['Goku', 'Vegeta', 'Trunks'];

const [, , p3] = personajes;

// console.log(p3);

export const retornaArreglo = () => {
    return ['ABC', 123];
}

// console.log(letras);
// console.log(numeros);

// Tarea

// 1. El primer valor del arr se llamarĂ¡ nombre
// 1. El primer valor del arr se llamarĂ¡ asignarNombre
const usarState = (valor) => {
    return [valor, () => { console.log('Hola Mundo')}];
}
