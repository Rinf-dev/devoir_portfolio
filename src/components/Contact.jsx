import React from "react";

import "./css/style.css";
import {Link} from 'react-router-dom';
import About from '../components/About';

const Contact = () => {
  return (
    <main >
      <div className="offre">
        <h2>Contact</h2>
        <p>Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.</p>        
        <span></span>
      </div>

      <div className="central container">
        <div className="articles row">
          <article className="first_article col-12 col-md-6">
            <h3>Formulaire de contact</h3>
            <form >
                  <input className="contactform" type="text" name="username"  placeholder="Votre nom" required/>
                  <input className="contactform" type="mail" name="usermail"  placeholder="Votre Adresse mail" required/>
                  <input className="contactform" type="text" name="userphone" placeholder="Votre numéro de t&léphone" required />
                  <input className="contactform" type="text" name="subject" placeholder="Sujet" required />
                  <textarea id="textmessage"  name="textmsg" placeholder="Votre message" cols="30" rows="10" required />
                  <button type="submit" value="Submit">Envoyer</button>
            </form>
          </article>
          <article className="second_article col-12 col-md-6">
            <h3>Mes coordonnées</h3>
            <h4>John Doe</h4>
              <p>
                <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-map" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M15.817.113A.5.5 0 0 1 16 .5v14a.5.5 0 0 1-.402.49l-5 1a.5.5 0 0 1-.196 0L5.5 15.01l-4.902.98A.5.5 0 0 1 0 15.5v-14a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0L10.5.99l4.902-.98a.5.5 0 0 1 .415.103M10 1.91l-4-.8v12.98l4 .8zm1 12.98 4-.8V1.11l-4 .8zm-6-.8V1.11l-4 .8v12.98z"/></svg>
                <span>40 rue Laure Diebold</span>
              </p>
              <p>
                <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16"><path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/><path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/></svg>
                <span>69009 Lyon, France</span>
              </p>
              <p>
              <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-phone" viewBox="0 0 16 16"><path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/><path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/></svg>
              <span>644 78 86</span>
              </p>
              <p>
                <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-envelope-at" viewBox="0 0 16 16"><path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z"/><path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648m-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z"/></svg>
                <span>john.doe@gmail.com</span>
              </p>
              <div>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.626965760113!2d4.796398612167803!3d45.77866571228111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1744120998379!5m2!1sfr!2sfr"></iframe>
              </div>
          </article>
        </div>
      </div>
    </main>
  );
};

export default Contact;
