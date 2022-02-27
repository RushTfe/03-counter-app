import '@testing-library/jest-dom'
import { retornaArreglo } from '../../bases/07-deses-arr'

describe('Pruebas en desestructuración', () => { 

    test('debe de retornar un String y un numero', () => {


        const [letras, numeros] = retornaArreglo();
        const expectedValue = ['ABC', 123];

        expect(letras).toBe('ABC');
        expect(typeof letras).toBe('string');


        expect(numeros).toBe(123);
        expect(typeof numeros).toBe('number');


    })


 })