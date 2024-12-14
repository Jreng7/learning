// let numberOne = Number(prompt('Digite um valor: '))

// if ( numberOne > 0) {
//   alert(`O número ${numberOne} é positivo`)
// } else if (numberOne < 0 ){
//   alert(`O número ${numberOne} negativo.`)
// } else {
//   alert(`O número ${numberOne} é neutro.`)
// }


// Com Switch Case
const turno = prompt("Digite o turno atual: ")

switch(turno.toLowerCase()){  // Switch fica "vigiando" a variável turno e transforma o valor recebido em letras minúsculas.
  case "dia":
    alert("Bom dia");
    break;
  case "tarde":
    alert("Boa tarde");
    break;
  case "noite":
    alert("Boa noite");
    break;
  default:
    alert("Nada foi digitado.");
}


// Com if else 
const turno2 = prompt("Digite o turno atual: ").toLowerCase()

if(turno2 === 'dia'){
  alert("Bom dia")
} else if (turno2 === 'tarde') {
  alert("Boa tarde")
} else if (turno2 === 'noite') {
  alert("Boa noite")
} else {
  alert("Nenhum turno foi digitado.")
}