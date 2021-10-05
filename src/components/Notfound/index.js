// Import packages/modules
import React from 'react'
import { Link } from "react-router-dom";

// Auth
import { isUserAuthenticated } from '../../utils/auth';

// Import style-sheet
import './notFound.scss';

// Import image
import perso from 'src/assets/images/perso404.png'

// Component
function Notfound() {

  const token = isUserAuthenticated();

  return (

    <div className="notFound">

      <h2>404 Page non trouvée</h2>

      <h3>Si Error 404 avait utilisé Wishlist, il n'aurait pas perdu sa page.</h3>

      <img src={perso} alt="perso" className="perso"/>
      
      <div className="goback-link">
        {(token === true) ?
          <Link key="1" to="/lists">
            Je retrouve le chemin des listes
          </Link>
          :
          <Link key="2" to="/">
            Je retrouve le chemin des listes
          </Link>
        }
      </div>

    </div>
  )
}

export default Notfound
