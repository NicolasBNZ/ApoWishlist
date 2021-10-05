// Imports packages and hooks
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from "react-router-dom";
import axios from "axios";

import { getToken } from '../../utils/auth';

// Import style
import './lists.scss';

// Component
const DeleteList = ({ getList }) => {

  const listid = getList.id;

  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);

  const { id } = useParams();

  const handleRemove = () => {

    const token = getToken();

    setLoading(true);
    setIsError(false);

    axios.get(`${process.env.REACT_APP_API}/list/delete/${listid}`, {
      headers: { 'Authorization': `Bearer ${token}` }
    })
    .then(res => {
      console.log('response : ', res);
      setData(res.data);
      setLoading(false);
    }).catch(err => {
      console.log('error : ', err);
      setLoading(false);
      setIsError(true);
    });
  }


  if (data) {
    // return <Redirect to={`/list/${idlist}`} />
    window.location.reload();
  }
  
  // First render
  // useEffect(() => {
  //   handleRemove()
  // }, []);

  return (

    <div className="deletelist-div">
    
      {/* <button className="deletelist-button" onClick={handleRemove}>🗑</button> */}
      
      <button 
        className="deletelist-button"
        onClick={() => {
          const confirmBox = window.confirm( "Voulez vous supprimer cette liste ?" )
          if (confirmBox === true) { handleRemove() }
        }}>
        ⨯
      </button>

    </div>

  )

};

// TODO : propTypes !!!

// Export component
export default DeleteList;
