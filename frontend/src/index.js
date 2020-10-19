import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//chama o app que contem o conteudo
ReactDOM.render(
  <React.StrictMode>
    <App />    
  </React.StrictMode>,
  document.getElementById('root')//pega o arquivo jsx(App) manda tudo pro public html e traduz no navegador
);


