// Import packages/modules
import React, { useState } from 'react'
import { Link } from "react-router-dom";

// Import style-sheet
import './footer.scss';

// Component
function ContactForm() {

  // State
  
  // Handle submits

  return (

    <div className="contactform">

      <div className="form-title">
        <h2>Contactez nous</h2>
      </div>

      <form className="form">

        <div className="signupform-group">
          {/* <label htmlFor="email">Email</label> */}
          <input
            className="input"
            type="text"
            name="pseudo"
            id="pseudo"
            placeholder="Nom..."
          />
        </div>

        <div className="signupform-group">
          {/* <label htmlFor="email">Email</label> */}
          <input
            className="input"
            type="email"
            name="email"
            id="email"
            placeholder="email..."
          />
        </div>

        <div className="signinform-group">
          <textarea className="textarea" rows="5" cols="33">
            Votre message...
          </textarea>
        </div>
        
        <div className="form-buttons">

          <Link to="/">
            <button
              type="button"
              className="button">
              Annuler
            </button>
          </Link>
          
          <button
            className="button"
            type="submit" >
            Envoyer
          </button>
          
        </div>

      </form>

    </div>

  )

}

// Export component
export default ContactForm;
