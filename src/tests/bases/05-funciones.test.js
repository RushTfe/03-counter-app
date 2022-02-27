import '@testing-library/jest-dom'
import { getUser, getUsuarioactivo } from "../../bases/05-funciones";

describe( 'Pruebas en 05-funciones' , () => {

    test('getUser debe de retornar un objeto', () => { 
        
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();

        expect( user ).toEqual( userTest ); 

     });


     // getUsuarioActivo debe retornar un objeto.
     test('getUsuarioActivo debe de retornar un objeto', () => { 
        
        const nombre = 'PEPE';
        const userTest = {
            uid: "ABC567",
            username: nombre
        };

        const user = getUsuarioactivo( nombre );

        expect(user).toEqual( userTest ); 

     });

});