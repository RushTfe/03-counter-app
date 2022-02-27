describe( 'Pruebas en el archivo demo.test.js', () => {
    test( 'Los string deben ser iguales', () => {
        // 1. Inicialización
        const mensaje = 'Hola mundo';
    
        // 2. Estímulo
        const mensaje2 = 'Hola mundo';
    
        // 3. Observar
        expect(mensaje ).toBe(mensaje2);
    
    })
});