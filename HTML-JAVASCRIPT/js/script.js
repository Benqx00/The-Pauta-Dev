// function olaMundo() {
//   alert("Olá Mundo!");
// }

/* Arrow function */
const olaMundo = () => {
  alert("Olá Mundo JS com Arrow Function!");
};

const mudarTexto = () => {
  // Criar uma variavel para armazenar o elemento do documento

  let elementoAlvo = document.getElementById("texto");

  elementoAlvo.innerHTML = "🔥 Novo texto com JS";
  elementoAlvo.style.color = "red";
  elementoAlvo.style.backgroundColor = "yellow";
};

const enviarNome = () => {
  let nomeDigitado = document.getElementById("nome").value;
  alert("Olá " + nomeDigitado);

  // let nomeDigitado = document.getElementsByName("nome").value;
  // alert("Olá " + nomeDigitado);
};

const somar = () => {
  event.preventDefault(); //
  // Buscou os elementos por ID
  let numero1 = document.getElementById("n1").value;
  let numero2 = parseInt(document.getElementById("n2").value);

  // Realizou a soma dos valores
  let result = parseInt(numero1) + numero2;
  // let result =  + numero2;

  // Devolveu o resultado para o formulario
  document.getElementById("resultado").innerHTML = result;
};

