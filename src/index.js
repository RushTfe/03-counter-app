import React from 'react';
import ReactDom from 'react-dom';
import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';

import './index.css'

const obj = 0;

const divRoot = document.querySelector('#root');


//ReactDom.render( <PrimeraApp saludo = 'Hola soy Goku' /> , divRoot);
ReactDom.render( <CounterApp value={ obj } /> , divRoot);