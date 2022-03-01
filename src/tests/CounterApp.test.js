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
    let wrapper;

    beforeEach( () => {
        wrapper = shallow(<CounterApp />);
    });


    test('Debe mostrar <CounterApp /> correctamente', () => { 

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

    test('Debe de incrementar con el botón de +1', () => { 

        wrapper.find('button').at(0).simulate('click');
        
        const counterText = wrapper.find('h2').text();

        expect(counterText).toBe('11');

     });

     test('Debe de decrementar con el botón de -1', () => { 
 
         wrapper.find('button').at(1).simulate('click');
         
         const counterText = wrapper.find('h2').text();
 
         expect(counterText).toBe('9');
 
      });

    test('Debe de resetear con el botón de reset', () => { 

        const wrapper = shallow( <CounterApp value={ 105 }/> );
        
        wrapper.find('button').at(1).simulate('click');
        wrapper.find('button').at(2).simulate('click');

        const counterText = wrapper.find('h2').text();

        expect(counterText).toBe('105');

    });
 });