import React from "react";
import "./css/style.css";
import {Link} from 'react-router-dom';
import About from '../components/About';

const Home = () => {
  return (
    <main >
      <div id="presentation">
        <h1>Bonjour, je suis John Doe</h1>
        <h2>Développeur Web full stack</h2>
        <Link to="/About">
          <button>En Savoir Plus</button>
          </Link>
      </div>


      <div className="central container">
        <div className="row">
          <article className="first_article col-12 col-md-6">
            <h3>A propos</h3>
            <figure className="doe"><img src={require('../images/john-doe-about.jpg')} alt = "Sa photo"/></figure>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ad suscipit quae, soluta, perspiciatis corporis laborum magnam deserunt alias ipsum tempore deleniti maxime repellat perferendis?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ad suscipit quae, soluta, perspiciatis corporis laborum magnam deserunt alias ipsum tempore deleniti maxime repellat perferendis?</p>
            
          </article>
          <article className="second_article col-12 col-md-6">
            <h3>Mes Compétences</h3>
            <ul>          
              <li>Html5 90%</li>
              <li><figure><img src={require('../images/red_bar.png') } alt = "barre" /><img src={require('../images/red_bar.png')} alt = "barre"/><img src={require('../images/red_bar.png')} alt = "barre"/><img src={require('../images/red_bar.png')} alt = "barre"/><img src={require('../images/red_bar.png')} alt = "barre"/><img src={require('../images/red_bar.png')} alt = "barre"/><img src={require('../images/red_bar.png')} alt = "barre"/><img src={require('../images/red_bar.png')} alt = "barre"/><img src={require('../images/red_bar.png')} alt = "barre"/><img src={require('../images/light_grey_bar.png')} alt = "barre"/></figure></li>
              <li>CSS3 80% </li>
              <li><figure><img src={require('../images/turkish_bar.png')} alt = "barre"/><img src={require('../images/turkish_bar.png')} alt = "barre"/><img src={require('../images/turkish_bar.png')} alt = "barre"/><img src={require('../images/turkish_bar.png')} alt = "barre"/><img src={require('../images/turkish_bar.png')} alt = "barre"/><img src={require('../images/turkish_bar.png')} alt = "barre"/><img src={require('../images/turkish_bar.png')} alt = "barre"/><img src={require('../images/turkish_bar.png')} alt = "barre"/><img src={require('../images/light_grey_bar.png')} alt = "barre"/><img src={require('../images/light_grey_bar.png')} alt = "barre"/></figure></li>
              <li>JAVASCRIPT 70%</li>
              <li><figure><img src={require('../images/yellow_bar.png')} alt = "barre"/><img src={require('../images/yellow_bar.png')} alt = "barre"/><img src={require('../images/yellow_bar.png')} alt = "barre"/><img src={require('../images/yellow_bar.png')} alt = "barre"/><img src={require('../images/yellow_bar.png')} alt = "barre"/><img src={require('../images/yellow_bar.png')} alt = "barre"/><img src={require('../images/yellow_bar.png')} alt = "barre"/><img src={require('../images/light_grey_bar.png')} alt = "barre"/><img src={require('../images/light_grey_bar.png')} alt = "barre"/><img src={require('../images/light_grey_bar.png')} alt = "barre"/></figure></li>
              <li>PHP 80%</li>
              <li><figure><img src={require('../images/green_bar.png')} alt = "barre"/><img src={require('../images/green_bar.png')} alt = "barre"/><img src={require('../images/green_bar.png')} alt = "barre"/><img src={require('../images/green_bar.png')} alt = "barre"/><img src={require('../images/green_bar.png')} alt = "barre"/><img src={require('../images/green_bar.png')} alt = "barre"/><img src={require('../images/green_bar.png')} alt = "barre"/><img src={require('../images/green_bar.png')} alt = "barre"/><img src={require('../images/light_grey_bar.png')} alt = "barre"/><img src={require('../images/light_grey_bar.png')} alt = "barre"/></figure></li>
              <li>REACT 50%</li>
              <li><figure><img src={require('../images/dark_grey_bar.png')} alt = "barre"/><img src={require('../images/dark_grey_bar.png')} alt = "barre"/><img src={require('../images/dark_grey_bar.png')} alt = "barre"/><img src={require('../images/dark_grey_bar.png')} alt = "barre"/><img src={require('../images/dark_grey_bar.png')} alt = "barre"/><img src={require('../images/light_grey_bar.png')} alt = "barre"/><img src={require('../images/light_grey_bar.png')} alt = "barre"/><img src={require('../images/light_grey_bar.png')} alt = "barre"/><img src={require('../images/light_grey_bar.png')} alt = "barre"/><img src={require('../images/light_grey_bar.png')} alt = "barre"/></figure></li>
            </ul>
          </article>
        </div>
      </div>
    </main>
  );
};

export default Home;
