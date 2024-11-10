
const calcular = document.getElementById('calcular')


function imc () {

  const nome = document.getElementById('nome').valeu
  const altura = document.getElementById('altura').value
  const peso = document.getElementById('peso').value
  const resultado = document.getElementById('resultado')

  if (nome !== '' && altura !== '' && peso !== '') {

    const valorIMC = ( peso / (altura * altura)).toFixed(2);

    let classificacao = '';

    resultado.textContent = valorIMC;

  } else {
    resultado.textContent = 'Preencha todos os campos.'
  }

}

calcular.addEventListener('click', imc)