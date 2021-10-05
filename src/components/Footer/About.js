import React from 'react'
import { useHistory } from "react-router-dom";

// About page

// Import logo
import martin from 'src/assets/images/martinPrez.png'
import coni from 'src/assets/images/ConiPrez.png'
import nico from 'src/assets/images/NicoPrez.png'
import tommy from 'src/assets/images/tommyPrez.png'

import './about.scss';

function About() {

  const history = useHistory();

  return (
    <div className="about">
      <button className="head-icon-back-dark" onClick={() => history.goBack()}>
        〈
      </button>

      <h2 className="about-title">Qui sommes nous?</h2>

      <div className="full-space"> <div className="people-space">
        <div className="pic-space">
          <img src={martin} alt="perso" className="martin-pic" />
        </div>
        <div className="description-space-full">
          <div className="description-space">
            <h3>Martin</h3>
            <h4>Product owner</h4>
            <h5>Dans sa wishlist :</h5>
            <div className="about-checklist">
              <div className="about-checklist-check">
                <h5>✓</h5>
              </div>
              <div>
                <h5>Un jerrican de maté pour arriver au bout du projet</h5>
              </div>
            </div>
          </div>
        </div>

      </div>

        <div className="people-space">
          <div className="pic-space">
            <img src={coni} alt="perso" className="coni-pic" />
          </div>
          <div className="description-space-full">
            <div className="description-space">
              <h3>Nicolas BNZ</h3>
              <h4>Scrum master</h4>
              <h5>Dans sa wishlist :</h5>
            <div className="about-checklist">
              <div className="about-checklist-check">
                <h5>✓</h5>
              </div>
              <div>
                <h5>Un fouet pour faire remplir le tableau de bord tous les jours</h5>
              </div>
            </div>
            </div>
          </div>
        </div>

        <div className="people-space">
          <div className="pic-space">
            <img src={nico} alt="perso" className="nico-pic" />
          </div>
          <div className="description-space-full">
            <div className="description-space">
              <h3>Nicolas BER</h3>
              <h4>Git master</h4>
              <h5>Dans sa wishlist :</h5>
            <div className="about-checklist">
              <div className="about-checklist-check">
                <h5>✓</h5>
              </div>
              <div>
                <h5>Le livre "Git hub de A à Z"</h5>
            </div>
            </div>
            </div>
          </div>
        </div>

        <div className="people-space">
          <div className="pic-space">
            <img src={tommy} alt="perso" className="tommy-pic" />
          </div>
          <div className="description-space-full">
            <div className="description-space">
              <h3>Thomas dit Tommy</h3>
              <h4>Lead back</h4>
              <h5>Dans sa wishlist :</h5>
            <div className="about-checklist">
              <div className="about-checklist-check">
                <h5>✓</h5>
              </div>
              <div>
                <h5>Du café pour tenir jusqu'au levé du soleil</h5>
            </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default About
