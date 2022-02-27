import '@testing-library/jest-dom';

import { getSaludo } from "../../bases/02-template-strings";


describe('Pruebas en 02-template-strings.js', () => {
    test('getSaludo debe de retornar hola + Pedro!', () => { 

        const nombre = 'Pedro';

        const saludo = getSaludo( nombre );

        expect( saludo ).toBe( 'Hola ' + nombre + '!');
     });


     // getSaludo debe retornar Hola Carlos! si no hay argumento sobre nombre
     test('getSaludo debe de retornar hola + Carlos!', () => { 

        const nombre = 'Carlos';

        const saludo = getSaludo( );

        expect( saludo ).toBe( 'Hola ' + nombre + '!');
     });
})