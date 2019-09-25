function buscaItem(chave) {
  const valor = window.localStorage.getItem(chave);
  if (valor) {
    return JSON.parse(valor);
  }
  return [];
}

function salvaItem(chave, item) {
  if(item && chave) {
    window.localStorage.setItem(chave, JSON.stringify(item));
  }
}

const listaDeInscritos = buscaItem("aluno");

function cadastrar() {
  nome = document.getElementById("name")
  idade = document.getElementById("age") 
  email = document.getElementById("email")


// console.log(nome);
// console.log(idade);
// console.log(email);


  const aluno = {
    nome: document.getElementById("name").value,
    idade: document.getElementById("age").value,
    email: document.getElementById("email").value
  }

  listaDeInscritos.push(aluno);
  
  // salvaItem("salvarAluno", aluno);
  
  salvaItem("listaDeInscritos", listaDeInscritos);
}

  // console.log(aluno);

  

 
  







  

function verInscritos() {
  console.log(buscaItem("aluno"));
}

