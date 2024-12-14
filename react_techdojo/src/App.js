// importações
/* CSS - Componentes - Bibliotecas e Funções */

import './App.css';
import React from 'react';


const App = () => {

/** 
 * 
 *  ÁREA ANTES DO RETURN dentro de "const App" ou export default App () => {}"
 *  Área onde devemos escrever JS
 *  Escrever a lógica de programação
 *  Criar funções
 *  Operar os fluxos, criar variáveis, constantes e estados.
 *  
 * O JSX não é HTML puro. Ele é convertido em código JavaScript por trás dos panos. 
 * Por exemplo, o código JSX:
 *  
 * 1) <h1>Hello, World!</h1>
 * 
 */

  return (  
    // Aqui dentro do return é área do JSX = (JavaScript XML) (tags html "bombada")
    <div>
      <h1>Olá</h1>
      <p>Comecei o curso de React</p>
    </div>
  );
}

export default App;