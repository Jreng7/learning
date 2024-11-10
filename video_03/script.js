
const calcular = document.getElementById('calcular')


function imc () {

  const nome = document.getElementById('nome').valeu
  const altura = document.getElementById('altura').value
  const peso = document.getElementById('peso').value
  const resultado = document.getElementById('resultado')

  if (nome !== '' && altura !== '' && peso !== '') {

    // Calcula o valor IMC com base no peso e altura fornecidos.
    const valorIMC = ( peso / (altura * altura)).toFixed(2);

    let classificacao = '';

    if (valorIMC < 18.5){
      classificacao = 'Abaixo do peso';
    }




    // Resultado imprime na tela o valor do IMC através de .textContent =! de .value
    resultado.textContent = ``;

  } else {
    resultado.textContent = 'Preencha todos os campos.'
  }

}

calcular.addEventListener('click', imc)