// Import packages/modules
import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from "axios";

// Import components
import Header from '../Header';

// Auth
import { getToken } from '../../utils/auth';

// Import style-sheet
import './createList.scss';

// Component
const CreateList = ( ) => {

  // States
  const [title, setTitle] = useState('');
  const [coment, setComent] = useState('');
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);

  const handleSubmit = (evt) => {

    const token = getToken();
    evt.preventDefault();

    setLoading(true);
    setIsError(false);

    const data = {
      title: title,
      coment: coment
    };

    axios.post(`${process.env.REACT_APP_API}/lists`, data,{
      headers: {'Authorization': `Bearer ${token}`}
    })
    .then(res => {
      setData(res.data);
      setTitle('');
      setComent('');
      setLoading(false);
    })
    .catch(err => {
      console.log('error : ', err);
      setLoading(false);
      setIsError(true);
    })
  }
  
  if (loading) {
    return <Redirect to="/lists" />
  }
 
  
  return (

    <div className="createlist">

      <Header />

      <div className="head-div">
        <div className="head-icon-back-medium">
          <Link to="/lists">
            〈
          </Link>
        </div>
        <div className="head-title">
          <h2>Nouvelle liste</h2>
        </div>
        <div className="clear">
          &nbsp;
        </div>
      </div>

      <div className="form">

          <input
            type="text"
            className="input"
            id="title"
            placeholder="Titre..."
            value={title}
            onChange={evt => setTitle(evt.target.value)} />

          <input
            type="text"
            className="input"
            id="coment"
            placeholder="Commentaire..."
            value={coment}
            onChange={evt => setComent(evt.target.value)} />

        {isError && <span className="createlist-form-error">Il y a eu une erreur.</span>}

        <div className="div-buttons">
          
          <Link to="/lists">
            <button
              type="button"
              className="button">
              Annuler
            </button>
          </Link>

          <button
            type="submit"
            className="button"
            onClick={handleSubmit}
            disabled={loading}
          > {loading ? 'Loading...' : 'Valider'}</button>

        </div>

      </div>

    </div>

  );

};

// Export component
export default CreateList;
