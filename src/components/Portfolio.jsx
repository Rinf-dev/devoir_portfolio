import React from "react";
import "./css/style.css";
import {Link} from 'react-router-dom';
import About from '../components/About';

const Portfolio = () => {
  return (
    <main >
      <div className="presentation2">
      </div>
      <div className="offre">
        <h2>Portfolio</h2>
        <p>Voici quelques-unes de mes réalisations</p>        
        <span></span>
      </div>


      <div className="central container">
        <div className="row service_block">
            <article className="service_article col-12 col-md-3 card">
            <figure className="portfolio_photo"><img src={require('../images/portfolio/fresh-food.jpg')} alt = "Sa photo"/></figure>
              <div className="card-body">
                <h3 className="card-title">Fresh Food</h3>
                <p className="card-text">Restaurant Vietnamien.</p>
                <a href="https://www.hanoi-caphe.com/"  target="_blank" class="btn btn-primary">Voir le site</a>
              </div>
              <span className="cardfoot">Site réalisé avec React</span>
            </article>
            <article className="service_article col-12 col-md-3 card">
            <figure className="portfolio_photo"><img src={require('../images/portfolio/restaurant-japonais.jpg')} alt = "Photo du restaurant japonais"/></figure>
              <div className="card-body">
                <h3 className="card-title">Restaurant Akira</h3>
                <p className="card-text">Restaurant Japonais</p>
                <a href="https://sushizen.fr/fr/" target="_blank" class="btn btn-primary">Voir le site</a>
              </div>
              <span className="cardfoot">Site réalisé avec Shopify</span>
            </article>
            <article className="service_article col-12 col-md-3 card">
            <figure className="portfolio_photo"><img src={require('../images/portfolio/espace-bien-etre.jpg')} alt = "Bouddah Photo"/></figure>
              <div className="card-body">
                <h3 className="card-title">Espace Bien-être</h3>
                <p className="card-text">La zénitude au présent</p>
                <a href="https://osiamspa.com/" target="_blank" class="btn btn-primary">Voir le site</a>
              </div>
              <span className="cardfoot">Site réalisé avec Angular</span>
            </article>
            <article className="service_article col-12 col-md-3 card">
            <figure className="portfolio_photo"><img src={require('../images/portfolio/football.png')} alt = "Bouddah Photo"/></figure>
              <div className="card-body">
                <h3 className="card-title">Football</h3>
                <p className="card-text">Vedettes de football en manga</p>
                <a href="http://faniry.andriamihaja.com" target="_blank" class="btn btn-primary">Voir le site</a>
              </div>
              <span className="cardfoot">Site réalisé avec Behance</span>
            </article>
            <article className="service_article col-12 col-md-3 card">
            <figure className="portfolio_photo"><img src={require('../images/portfolio/enfant1.png')} alt = "Enfant du refuge"/></figure>
              <div className="card-body">
                <h3 className="card-title">Enfants en détresse</h3>
                <p className="card-text">Orphelinat de Tamatave</p>
                <a href="https://www.rinf.org/refuge/newsletter/nl10" target="_blank" class="btn btn-primary">Voir le site</a>
              </div>
              <span className="cardfoot">Site réalisé avec HTML-CSS</span>
            </article>
            <article className="service_article col-12 col-md-3 card">
            <figure className="portfolio_photo"><img src={require('../images/portfolio/screens.jpg')} alt = "Sa photo"/></figure>
              <div className="card-body">
                <h3 className="card-title">Réparations micro</h3>
                <p className="card-text">Réparations High Tech </p>
                <a href="https://www.atelierduportable.com/"  target="_blank" class="btn btn-primary">Voir le site</a>
              </div>
              <span className="cardfoot">Site réalisé avec Rien du tout</span>
            </article>

        </div>
      </div>
    </main>
  );
};

export default Portfolio;
