// Import packages/modules
import React from 'react';
import { Link } from 'react-router-dom';

// Import style-sheet
import './home.scss';

// Import image
import logo from 'src/assets/images/wishlist-logo.png'

// Component
const Home = () => (

  <div className="home">
  
    <div className="home-logo-div">
      <h1>
        <img src={logo} alt="logo WishList" className="home-logo-image" />
      </h1>
    </div>

    <div className="home-accroche">
      One wish, one list !
    </div>

    <div className="home-buttons-div">

      <Link key="1" to="/signin">
          <button
            type="button"
            className="button">
            Se connecter
          </button>
        </Link>

        <Link key="2" to="/signup">
          <button
            type="button"
            className="button">
            S'enregistrer
          </button>
        </Link>

    </div>

  </div>
);

// Export component
export default Home;
