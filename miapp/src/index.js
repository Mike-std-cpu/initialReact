import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
/**
 * la variable root es para darle referencia a su contra parte en html, donde hay un div con id...
 * root, este contendra todo lo que react necesite poner o anexar
 * 
 * reactDOOM -> hace referenicia al uso del doom dentro de la pagina web
 */
root.render(<React.StrictMode> <App /></React.StrictMode>);
/**
 * streactMode que vamos a renderizar en modo estricto la aplicacion
 * ¿ Que aplicacion? pues la function app que que esta importada desde la parte inicial del script
*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
