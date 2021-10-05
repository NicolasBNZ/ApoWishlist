// Import packages/modules
import React, { useState } from 'react';
import { Link, useParams, Redirect } from "react-router-dom";
import axios from "axios";

// Import components
import Header from '../Header';

// Auth
import { getToken } from '../../utils/auth';

// Import style-sheet
import './createItem.scss';

// Component
const CreateItem = ( ) => {

  // States
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [coment, setComent] = useState('');
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);
 
  const { id } = useParams();

  const handleSubmit = (event) => {

    const token = getToken();

    event.preventDefault();
    setLoading(true);
    setIsError(false);

    const data = {
      title: title,
      url: url,
      coment: coment
    };

    axios.post(`${process.env.REACT_APP_API}/list/${id}`, data,{  
      headers: {'Authorization': `Bearer ${token}`}
    })
    .then(res => {
      setData(res.data);
      setTitle('');
      setUrl('');
      setComent('');
      setLoading(false);
    }).catch(err => {
      console.log('error : ', err);
      setLoading(false);
      setIsError(true);
    });

  }
  
  if (loading) {
    return <Redirect to={`/list/${id}`} />
  }

  return (

    <div className="createitem">

      <Header />

      <div className="head-div">
        <div className="head-icon-back-medium">
          <Link to={`/list/${id}`}>
            〈
          </Link>
        </div>
        <div className="head-title">
          <h2>Nouvel item</h2>
        </div>
        <div className="head-icon">
          <Link to={`/list/${id}`}>
            &nbsp;
          </Link>
        </div>
      </div>

      <div className="form">

        <input
          type="text"
          className="input"
          id="title"
          placeholder="Titre..."
          value={title}
          onChange={event => setTitle(event.target.value)} />

        <input
          type="text"
          className="input"
          id="url"
          placeholder="URL..."
          value={url}
          onChange={event => setUrl(event.target.value)} />

        <input
          type="text"
          className="input"
          id="coment"
          placeholder="Commentaire..."
          value={coment}
          onChange={event => setComent(event.target.value)} />

        {isError && <span className="createitem-form-error">Il y a eu une erreur.</span>}

        <div className="form-buttons">
          
          <Link to={`/list/${id}`}>
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
export default CreateItem;
