import '@testing-library/jest-dom'
import { findHeroeById, findHeroesByOwner } from '../../bases/08-imp-exp';
import heroes from '../../data/heroes';

describe('Pruebas en funciones de Héroes', () => {
    test('Debe de retornar un héroe por id', () => {

        const id = 1;
        const heroe = findHeroeById(id);
        const heroeData = heroes.find( h => h.id === id );

        expect( heroe ).toEqual( heroeData );

    });

    test('Debe de retornar undefined si héroe no existe', () => {

        const id = 10;
        const heroe = findHeroeById(id);

        expect( heroe ).toBe( undefined );

    });

    // Debe retornar un arreglo con los héroes de DC
    // owner
    // toEqual al arreglo filtrado
    test('Debe retornar un arreglo con los héroes de DC', () => {

        const owner = 'DC';
        const heroes = findHeroesByOwner(owner);
        const heroesDC = heroes.filter(h => h.owner === owner);

        expect( heroes ).toEqual( heroesDC );

    });


    // Debe retornar un arreglo con los héroes de Marvel
    // length = 2
    test('Debe retornar un arreglo con los héroes de Marvel', () => {

        const owner = 'Marvel';
        const heroes = findHeroesByOwner(owner);
        const totalHeroesMarvel = 2;

        expect( heroes.length ).toBe( totalHeroesMarvel );

    });
});