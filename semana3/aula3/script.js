class Post {
  constructor(titulo, autor, conteudo){
    this.titulo = titulo;
    this.autor = autor;
    this.conteudo = conteudo;
  }
    criarNovoPost(){
      const novoPost = this.titulo + ' ' + this.autor + ' ' + this.conteudo;
        return novoPost;
    }
}

const listaDePost = [];

function aoClicarEmPostar() {
  let tituloInserido = document.getElementById('titulo').value;
  let autorInserido = document.getElementById('autor').value;
  let conteudoInserido = document.getElementById('conteudo').value;
    
  const post1 = new Post(tituloInserido, autorInserido, conteudoInserido);
  post1.criarNovoPost();
    console.log(post1);

  listaDePost.push(post1);
  console.log(listaDePost);

  const limparTitulo = document.getElementById("titulo").value = "";
  const limparAutor = document.getElementById("autor").value = "";
  const limparConteudo = document.getElementById("conteudo").value = "";
}

