const persona = {
    nombre: 'Pedro',
    apellido: 'Galindo',
    edad: 30,
    direccion: {
        ciudad: 'Santa Cruz de Tenerife',
        zip: 38008,
        lat: 14.3433,
        long: 34.4334
    }
};

const persona2 = {...persona};

persona2.nombre = 'Peter';

console.log(persona);
console.log(persona2);