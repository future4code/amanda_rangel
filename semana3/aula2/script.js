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

function adicionarAluno() {
  const aluno = {
    nome: document.getElementById("name").value,
    idade: document.getElementById("age").value,
    email: document.getElementById("email").value
  } 

  let limparInput= document.querySelector(".form").reset();

  console.log(aluno);

  salvaItem("salvarAluno", aluno);

  const buscarDadosAlunos = buscaItem("salvarAluno");
  console.log(buscarDadosAlunos);

  const alunoInscrito = ["buscarDadosAlunos"];

}






  

function verInscritos() {
  console.log(buscaItem("aluno"));
}

