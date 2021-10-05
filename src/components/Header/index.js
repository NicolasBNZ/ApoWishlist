// Import packages/modules
import React from 'react';
import { Link } from 'react-router-dom';

// Auth
import { isUserAuthenticated } from '../../utils/auth';
// isUserAuthenticated returns localStorage.getItem('token') !== null
const token = isUserAuthenticated();

// Import style-sheet
import './header.scss';

// Import image
import logoimage from 'src/assets/images/wishlist-logo-header.png'
import logouticon from 'src/assets/images/icon-logout-light.png'

// Logout function
const logout = () => {
  localStorage.clear();
  window.location.href = '/';
}

// Component
const Header = ( ) => {

  return (

    <header>

      <div className="header-logo-div">
        <Link to="/lists">
          <img src={logoimage} alt="logo WishList" className="header-logo-image" />
        </Link>
      </div>

      <div className="header-logout-div">

        {/* <img src={logouticon} alt="logout" className="header-logout-image" onClick={logout}/> */}
        {/* <button className="header-logout-button" onClick={logout}>Logout</button> */}
      
        {(token === true) ?
          <div>
            <button className="header-logout-button"
            onClick={() => {
              const confirmBox = window.confirm( "Voulez-vous vous déconnecter ?" )
              if (confirmBox === true) { logout() }
            }}
            />
          </div>
          :
          <div></div>
        }

      </div>

    </header>

  )
};

// Export component
export default Header;

{/* <button className={cssClassLogout} onClick={logout}>Logout</button> */ }
