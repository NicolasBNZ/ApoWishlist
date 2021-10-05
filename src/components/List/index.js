// Imports packages and hooks
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

// Import components
import Header from '../Header'
import Items from './Items'

// Auth
import { getToken } from '../../utils/auth';

// Import style-sheet
import './list.scss';

// Component
const List = () => {

  // States
  const [dataId, setDataId] = useState([]);
  const [dataTitle, setDataTitle] = useState([]);
  const [dataComent, setDataComent] = useState([]);
  const [dataItems, setDataItems] = useState([]);

  const { id } = useParams();

  // Loding one list
  const loadLists = () => {

    const token = getToken();



    axios.get(`${process.env.REACT_APP_API}/list/${id}?withItems=true`, {
      headers: { 'Authorization': `Bearer ${token}` }
    })
      // Response Ok
      .then((response) => {
        const { data } = response;
        const { id, title, coment, items } = data;
        setDataId(id);
        setDataTitle(title);
        setDataComent(coment);
        setDataItems(items);
      })
      // Response error
      .catch((error) => {
        window.location.href = "/notFound";
        console.log(error);

      })

  }



  // First render
  useEffect(() => {
    loadLists();
  }, []);

  return (


    <div className="list">
      <Header />
      <Items dataId={dataId} dataTitle={dataTitle} dataComent={dataComent} dataItems={dataItems} />
    </div>

  );

};

// TODO : propTypes !!!

// Export component
export default List;
