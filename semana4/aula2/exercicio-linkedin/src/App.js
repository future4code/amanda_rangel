import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BigCard } from './components/BigCard/BigCard';
import { SmallCard } from './components/SmallCard/SmallCard';
import { ImageButton } from './components/ImageButton/ImageButton';
import { PageSection } from './components/PageSection/PageSection';
import foto_amanda from './img/foto_amanda.png';
import home_icon from './img/home_icon.png'
import facebook_square_icon from './img/facebook_square_icon.png'
import envelope_icon from './img/envelope_icon.png'
import caret_down_icon from './img/caret_down_icon.png'

const bigCard1 = {
  image: foto_amanda,
  title: 'Amanda Rangel Mendonça',
  paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim necessitatibus doloremque quam, et nobis error excepturi eveniet autem vero asperiores sunt voluptas alias obcaecati, animi ex voluptatum vitae ea impedit.'
}

const smallCard1 = {
  image: envelope_icon,
  label: 'Email:',
  adress: 'a.rangel@gmail.com'
}

const smallCard2 = {
  image: home_icon,
  label: 'Endereço:',
  adress: 'Rua Fidelis Martins, 41'
}

const imageButton1 = {
  image: caret_down_icon,
  label: 'Ver mais'
}

function App() {
  return (
    <div className="App">
      <BigCard image={bigCard1.image} title={bigCard1.title} paragraph={bigCard1.paragraph} />
      <SmallCard image={smallCard1.image} label={smallCard1.label} adress={smallCard1.adress} />
      <SmallCard image={smallCard2.image} label={smallCard2.label} adress={smallCard2.adress} />
      <ImageButton image={imageButton1.image} label={imageButton1.label} />
    </div>
  );
}

export default App;
