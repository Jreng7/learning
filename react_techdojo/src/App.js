// importações
/* CSS - Componentes - Bibliotecas e Funções */
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
    <div className='App'>
      <h1>Curso React | TecDojo</h1>
      <p>
        Curso completo na plataforma Tech Dojo, foi cedido 30 dias para
        experimentar a plataform e enviar um feedback.
      </p>
      <h3>Tabela</h3>
      <table>
        <thead>
          <tr>
            <th>Nome</th> {/* th = table header. Cabeçalho da tabela. */}
            <th>Idade</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>João</td> {/* td = table data ou seja, dados da tabela. */}
            <td>Idade</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;