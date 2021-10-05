// Import packages/modules
import React, { useState } from 'react'
import { Link } from "react-router-dom";

// Import style-sheet
import './signin.scss';

// Import image
import logo from 'src/assets/images/wishlist-logo.png'

// Component
function SigninForm({ Login, error }) {

  // Local state details for the form
  const [details, setDetails] = useState({ email: "", password: "" });
  // console.log('details: ', details);

  // Method to handle submits, prevent defaults re-render. And pass through details
  const submitHandler = event => {
    event.preventDefault();
    Login(details);
  }

  return (

    <div className="signform">
      
      <div className="signin-logo-div">
        <img src={logo} alt="logo WishList" className="signin-logo-image" />
      </div>

      <div className="form-title">
        <h2>Connexion</h2>      
      </div>


      <form className="form" onSubmit={submitHandler}>

        {(error !== "") ? (<div className="error">{error}</div>) : ""}

        <div className="signinform-group">
          {/* <label htmlFor="email">Email</label> */}
          <input
            className="input"
            type="text"
            name="email"
            id="email"
            placeholder="email..."
            value={details.name}
            onChange={event => setDetails({ ...details, email: event.target.value })}
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
            value={details.password}
            onChange={event => setDetails({ ...details, password: event.target.value })}
            
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
          
          <button
            className="button"
            type="submit" >
            Valider
          </button>

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
export default SigninForm;
