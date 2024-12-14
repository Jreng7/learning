### JSX, HTML, JS e mais...

```jsx
// Importações
/* CSS - Componentes - Bibliotecas e Funções */
import './App.css';
import React from 'react';

const App = () => {

  return (
    // Aqui dentro do return é área do JSX = (JavaScript XML) (tags html "bombada")
    <div>
      <h1>Olá</h1>
      <p>Comecei o curso de React</p>
    </div>
  );
}

export default App;

// JS - PARTE INTERNA DO App

/** ÁREA ANTES DO RETURN dentro de "const App" ou export default App () => {}"
 *  Escrever a lógica de programação
 *  Criar funções
 *  Operar os fluxos, criar variáveis, constantes e estados.
 *  
 * O JSX não é HTML puro. Ele é convertido em código JavaScript por trás dos panos. 
 * Por exemplo, o código JSX:
 *  
 * 1) <h1>Hello, World!</h1>
 * 
 * É transformado em:
 * 
 * 2) React.createElement('h1', null, 'Hello, World!');
 * 
 * OBS: A função React.createElement tem a seguinte assinatura:
 * React.createElement(type, props, ...children)
 * 
 * 1) type: O tipo do elemento, como 'h1', 'div', 'button', ou até mesmo um componente React customizado.
 * 2) props: Um objeto que contém as propriedades (atributos) do elemento.
 * 
 * Exemplo: { className: 'title', id: 'main-header' }.
 * Se não houver nenhuma propriedade, o valor é null.
 * 
 * 3) ...children: O conteúdo ou os elementos filhos do elemento.
 * 
 * Exemplo: 'Hello, World!' ou outros elementos JSX, como <span>.
 */
