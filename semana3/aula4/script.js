
function limpaCampos(){
  document.getElementById("valor").value = "";
  document.getElementById("tipo-despesa-cadastro").value = "";
  document.getElementById("descrição").value = "";
}

class Despesa {
  constructor(valor, tipo, descricao) {
    this.valor = valor;
    this.tipo = tipo;
    this.descricao = descricao;
  }
}

const listaDeDespesas = [];

const valor = document.getElementById("valor").value;
const tipo = document.getElementById("tipo-despesa-cadastro").value;
const descricao = document.getElementById("descricao").value;


function criaDespesa() {

  
  if(valor === '' || descricao === ''){
   
    alert("Preencha todos os campos antes de prosseguir");
    return;
  }

  let novaDespesa = new Despesa(valor, tipo, descricao);

   listaDeDespesas.push(novaDespesa);
     console.log(listaDeDespesas);
}




