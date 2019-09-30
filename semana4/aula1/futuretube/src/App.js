import React from 'react';
import logo from './logo.svg';
import './App.css';
import media_1 from './imagens/media_1.png';
import media_2 from './imagens/media_2.png';
import media_3 from './imagens/media_3.png';  
import media_4 from './imagens/media_4.png';  
import media_5 from './imagens/media_5.png';  
import media_6 from './imagens/media_6.png';  
import media_7 from './imagens/media_7.png';  
import media_8 from './imagens/media_8.png';  

function App() {
  return (
    <div className="container">
      <header>
        <div id="header-text">
          <a href="index.html" id="logo">FutureTube</a> 
          <h2>Media. For anyone.</h2>
        </div>
        <div id="search-block">
          <form action="#">
            <input type="search" name="Busca" placeholder="Busca" id="search-placeholder"/>
          </form>
        </div>
        <div>
        <a href="#"><i class="fas fa-video"></i></a>
        </div>
      </header>
      <section id="left-menu_post-section">
        <aside id="left-menu">
          <ul>
            <li>Início</li>
            <li>Em alta</li>
            <li>Inscrições</li>
            <li>Originais</li>
            <hr/>
            <li>Biblioteca</li>
            <li>Histórico</li>
          </ul>
        </aside>
        <div id="post-section">
          <div class="medias">
            <a href="#"><img src={media_1} alt="media_1"/></a>
            <div class="media-name"><h5>Media 1</h5></div>
          </div>
          <div class="medias">
            <a href="#"><img src={media_2}  alt="media_2"/></a>
            <div class="media-name"><h5>Media 2</h5></div>
          </div>
          <div class="medias">   
            <a href="#"><img src={media_3}  alt="media_3"/></a>
            <div class="media-name"><h5>Media 3</h5></div>
          </div>  
          <div class="medias">
            <a href="#"><img src={media_4}/></a>
            <div class="media-name"><h5>Media 4</h5></div>
          </div>
          <div class="medias">
            <a href="#"><img src={media_5} alt="media_5"/></a>
            <div class="media-name"><h5>Media 5</h5></div>
          </div>
          <div class="medias">
            <a href="#"><img src={media_6} alt="media_6"/></a>
            <div class="media-name"><h5>Media 6</h5></div>
          </div>
          <div class="medias">
            <a href="#"><img src={media_7}  alt="media_7"/></a>
            <div class="media-name"><h5>Media 7</h5></div>
          </div>
          <div class="medias">
            <a href="#"><img src={media_8}  alt="media_8"/></a>
            <div class="media-name"><h5>Media 8</h5></div>
          </div>
        </div>
      </section>  
      <footer>
        <p>&copy;2019 FutureTube | Media. For anyone.</p>
      </footer>
    </div>
  );
}

export default App;
