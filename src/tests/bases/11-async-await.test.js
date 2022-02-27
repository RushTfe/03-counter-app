import { findImagen } from "../../bases/11-async-await"

describe('Pruebas con async-await y Fetch', () => { 
    
    test('Debe retornar la url de la imagen', async() => { 
        
        const url = await findImagen();

        expect(url.includes('https://')).toBe( true );

     })

 })