class Post {
  constructor(titulo, autor, conteudo) {
    this.titulo = titulo;
    this.autor = autor;
    this.conteudo = conteudo;
  }
  criarNovoPost() {
    const novoPost = this.titulo + ' ' + this.autor + ' ' + this.conteudo;
    return novoPost;
  }
}

const listaDePost = [];

function aoClicarEmPostar() {
  let tituloInserido = document.getElementById('titulo').value;
  let autorInserido = document.getElementById('autor').value;
  let conteudoInserido = document.getElementById('conteudo').value;

  const post = new Post(tituloInserido, autorInserido, conteudoInserido);
  post.criarNovoPost();
  // console.log(post);

  listaDePost.push(post);
  console.log(listaDePost);

  const limparTitulo = document.getElementById("titulo").value = "";
  const limparAutor = document.getElementById("autor").value = "";
  const limparConteudo = document.getElementById("conteudo").value = "";

  const postagem = document.getElementById("area-post");
  
  postagem.innerHTML = "";

  for (let post of listaDePost) {
    postagem.innerHTML += '<div>' + post.criarNovoPost() + '</div>';
  }
}


