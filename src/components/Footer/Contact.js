// Import packages/modules
import React from 'react'
import { useHistory } from "react-router-dom";

// Import components
import ContactForm from './ContactForm';

// Component
function Contact() {

  const history = useHistory();

  return (

    <div className="contact">

      <button className="head-icon-back-dark" onClick={() => history.goBack()}>
        〈 
      </button>

      <div className="contact-form">
        <ContactForm />
      </div>
    
    </div>
  )

}

// Export component
export default Contact


