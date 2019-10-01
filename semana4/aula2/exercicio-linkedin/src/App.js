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
import futuretube_icon from './img/futuretube_icon.png'
import logo_menu from './img/logo_menu.jpg'
import twitter_square_icon from './img/twitter_square_icon.png'
import github_square_icon from './img/github_square_icon.png'

const bigCard1 = {
  image: foto_amanda,
  title: 'Amanda Rangel Mendonça',
  paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim necessitatibus doloremque quam, et nobis error excepturi eveniet autem vero asperiores sunt voluptas alias obcaecati, animi ex voluptatum vitae ea impedit.'
}

const bigCard2 = {
  image: futuretube_icon,
  title: 'Futuretube',
  paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim necessitatibus doloremque quam, et nobis error excepturi eveniet autem vero asperiores sunt voluptas alias obcaecati, animi ex voluptatum vitae ea impedit.'
}
const bigCard3 = {
  image: logo_menu,
  title: 'F4 Bank',
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
const imageButton2 = {
  image: facebook_square_icon,
  label: 'Facebook'
}

const imageButton3 = {
  image: twitter_square_icon,
  label: 'Twitter'
}
const imageButton4 = {
  image: github_square_icon,
  label: 'Github'
}

const pageSection1 = {
  title: 'Dados Pessoais'
}

const pageSection2 = {
  title: 'Experiências Profissionais'
}
const pageSection3 = {
  title: 'Redes Sociais'
}

function App() {
  return (
    <div className="App">
      <PageSection title={pageSection1.title}>
        <BigCard image={bigCard1.image} title={bigCard1.title} paragraph={bigCard1.paragraph} />
        <SmallCard image={smallCard1.image} label={smallCard1.label} adress={smallCard1.adress} />
        <SmallCard image={smallCard2.image} label={smallCard2.label} adress={smallCard2.adress} />
        <ImageButton image={imageButton1.image} label={imageButton1.label} />
      </PageSection>
      <PageSection title={pageSection2.title}>
        <BigCard image={bigCard2.image} title={bigCard2.title} paragraph={bigCard2.paragraph} />
        <BigCard image={bigCard3.image} title={bigCard3.title} paragraph={bigCard3.paragraph} />
       </PageSection>
       <PageSection title={pageSection3.title}>
         <ImageButton image={imageButton2.image} label= {imageButton2.label} />  
         <ImageButton image={imageButton3.image} label= {imageButton3.label} />  
         <ImageButton image={imageButton4.image} label= {imageButton4.label} />  
       </PageSection>
    </div>
  );
}

export default App;
