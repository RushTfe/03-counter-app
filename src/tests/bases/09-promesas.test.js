import '@testing-library/jest-dom'
import { findHeroeByIdAsync } from '../../bases/09-promesas';
import heroes from '../../data/heroes';

describe('Pruebas con promesas', () => { 
    
    test('findHeroeById Debe de retornar un héroe async', ( done ) => { 
        
        const id = 1;

        findHeroeByIdAsync( id )
            .then( heroe => {
                expect( heroe ).toBe( heroes[0] );
                done();
            });
            
     });

     test('Debe obtener un error si el héroe no existe', ( done ) => { 
         
        const id = 10;

        findHeroeByIdAsync(id)
        .catch(error => {
            expect( error ).toBe( 'No se pudo encontrar el héroe' );
            done();
        });

      });

 });