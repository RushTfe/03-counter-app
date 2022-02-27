import CounterApp from '../CounterApp';
import React from 'react';
import { shallow } from 'enzyme'

/*
    Tarea:
    
    1. Crear las siguientes pruebas para el CounterApp
        - Debe mostrar <CounterApp /> correctamente (hacer match con un snapshot) y sus valores por defecto.

    2. Debe mostrar el valor por defecto de 100
        - Usar el wrapper.find, tomando el elemento html donde se muestra el valor del contador.
*/

describe('Pruebas sobre CounterApp', () => { 
    
    test('Debe mostrar <CounterApp /> correctamente', () => { 
        
        const wrapper = shallow(<CounterApp />);

        expect( wrapper ).toMatchSnapshot();

     });
    
    test('Debe mostrar el valor por defecto de 100', () => { 
        
        const valorInicial = 100;

        const wrapper = shallow(
            <CounterApp 
                value={ valorInicial } 
            />
        );

        const valor = wrapper.find('h2').text();

        expect( valor ).toBe( '100' );

    });
 });