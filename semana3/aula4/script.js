
function limpaCampos(){
  document.getElementById("valor").value = "";
  document.getElementById("descrição").value = "";
}

// cria classe para a despesa

class Despesa {
  constructor(valor, tipo, descricao) {
    this.valor = valor;
    this.tipo = tipo;
    this.descricao = descricao;
  }
  compilaDadosDespesa() {
    const novaDespesa = "<li>" + "<p>" + "Valor: " + this.valor + "</p>" + "<p>" + "Tipo: " + this.tipo + "</p>" + "<p>" + "Descrição: " + this.descricao + "</p>" + "<li>" + "<hr>";
    return novaDespesa;
  }
}

// cria array para armazenar as despesas inseridas

let listaDeDespesas = [];


function criaDespesa() {
// captura dados dos inputs
  const valor = document.getElementById("valor").value;
  const tipo = document.getElementById("tipo-despesa-cadastro").value;
  const descricao = document.getElementById("descricao").value;

// impede que sejam criadas instancias novas sem preenchimento dos campos 
  if(valor === '' || descricao === ''){
   
    alert("Preencha todos os campos antes de prosseguir");
    return;
  }

// limpa os campos de input após clicar no botão cadastrar
  const limpaValor = document.getElementById("valor").value = "";
  const limpaDescricao = document.getElementById("descricao").value = "";

 // cria nova instancia de despesa
  let novaDespesa = new Despesa(valor, tipo, descricao);
// armazena nova instancia na array
  listaDeDespesas.push(novaDespesa);
    console.log(listaDeDespesas);
    imprimeTodasDespesas();
}
  
// imprime as despesas no html
function imprimeTodasDespesas() {
  const areaDasDespesas = document.getElementById("area-despesas");
// limpa area para evitar info duplicadas
  areaDasDespesas.innerHTML = "";
// adiciona despesa na area de despesa
  for (let despesa of listaDeDespesas){
    areaDasDespesas.innerHTML += despesa.compilaDadosDespesa();
  }
}

function aoClicarEmFiltrar(){
  const filtraTipo = listaDeDespesas.filter((despesa, index, array) => {
    if (despesa.tipo === "casa" || despesa.tipo === "transporte" || despesa.tipo === "alimentação"){
        return true;
      } 
      return false;
  })
  console.log(filtraTipo);
}
//   const filtraTipoTransp = listaDeDespesas.filter((despesa, index, array) => {
//     if (despesa.tipo === "transporte"){
//         return true;
//       } 
//       return false;
//   })
//   console.log(filtraTipoTransp);
// }