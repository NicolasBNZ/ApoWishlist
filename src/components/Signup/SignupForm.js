// Import packages/modules
import React, { useState } from 'react'
import { Link } from "react-router-dom";

// Import style-sheet
import './signup.scss';

// Import image
import logo from 'src/assets/images/wishlist-logo.png'

// Component
function SignupForm({ Login, error }) {

  // State
  
  // Handle submits

  return (

    <div className="signupform">
      
      <div className="signup-logo-div">
        <img src={logo} alt="logo WishList" className="signup-logo-image" />
      </div>
      
      <div className="form-title">
        <h2>Inscription</h2>
      </div>

      <form className="form">

        <div className="signupform-group">
          {/* <label htmlFor="email">Email</label> */}
          <input
            className="input"
            type="text"
            name="pseudo"
            id="pseudo"
            placeholder="Nom d'utilisateur..."
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
          {/* <label htmlFor="password">Password</label> */}
          <input
            className="input"
            type="password"
            name="password"
            id="password"
            placeholder="Mot de passe..."
          />
        </div>
        
        <div className="form-buttons">

          <Link to="/">
            <button
              type="button"
              className="button">
              Annuler
            </button>
          </Link>
          
          <Link to="/">
            <button
              className="button"
              type="submit" >
              Valider
            </button>
          </Link>

          {/* <input
            className="button"
            type="submit"
            value="Se connecter"
          /> */}
          
        </div>

      </form>

    </div>

  )

}

// Export component
export default SignupForm;
