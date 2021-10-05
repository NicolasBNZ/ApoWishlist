// Imports packages and hooks
import React, { useState, useEffect } from 'react';
import { useParams, Redirect } from "react-router-dom";
import PropTypes from 'prop-types';
import axios from "axios";

// Auth
import { getToken } from '../../utils/auth';

// Import style
import './list.scss';

// Component
const DeleteItem = ({ itemObj, listId }) => {

  const itemid = itemObj.id;
  const idlist = listId;

  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);
 
  const { id } = useParams();

  const handleDelete = () => {

    const token = getToken();

    setLoading(true);
    setIsError(false);

    axios.get(`${process.env.REACT_APP_API}/list/${idlist}/item/${itemid}/delete`, {
      headers: {'Authorization': `Bearer ${token}`}
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

  // useEffect( () => {
  //   handleDelete;
  // }, []);
  
  return (
    <div className="deleteitem">

      {/* <button className="delete" onClick={handleDelete}>🗑</button> */}
      
      <button 
        className="delete-item"
        onClick={() => {
          const confirmBox = window.confirm( "Voulez vous supprimer cet article ?" )
          if (confirmBox === true) { handleDelete() }
        }}>
        {/* 🗑 */}
        ⨯
      </button>

    </div>
  )

};

// TODO : propTypes !!!

// Export component
export default DeleteItem;
