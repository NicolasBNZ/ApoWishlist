// Import packages/modules
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import axios from 'axios';

// Import components
import Header from 'src/components/Header';
import DeleteList from './DeleteList'

// Auth
import { getToken } from '../../utils/auth';

// Import style-sheet
import './lists.scss';

// Component
const Lists = () => {

  // State
  const [getLists, setGetLists] = useState([]);

  const token = getToken();

  const fetchLists = () => {

    axios.get(`${process.env.REACT_APP_API}/lists`, {
      headers: { 'Authorization': `Bearer ${token}` }
    })
      .then(res => {
        setGetLists(res.data);
        console.log('res dans lists après get: ', res);
      })
      .catch(err => {
        console.log('error : ', err);
      })

  }



  // First render
  useEffect(() => {
    fetchLists();

  }, []);

  return (

    <div className="lists">

      <Header />

      <div className="head-div">
        <div className="head-icon-back-medium">
        &nbsp; &nbsp;
        </div>
        <div className="head-title">
          <h2>Mes listes</h2>
        </div>
        <div className="head-icon-add-div">
          <div className="head-icon-add">
            <Link to="/lists/createlist">
              +
            </Link>
          </div>
        </div>
      </div>

      <div className="lists-alllists-div">
        {getLists
          .sort(({ id: previousID }, { id: currentID }) => currentID - previousID)
          .map((getList) => (
            <div key={getList.id} className="lists-onelist-div">
              <Link key={`/list/${getList.id}`} to={`/list/${getList.id}`}>
                <h3>{getList.title}</h3>
                <h4 className="list-onelist">{getList.coment}</h4>
              </Link>
              <DeleteList getList={getList} />
            </div>
          ))}

      </div>

    </div>
  )

};

// Lists.propTypes = {
//   dataLists: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       title: PropTypes.string.isRequired,
//       coment: PropTypes.string.isRequired,
//     }).isRequired,
//   ).isRequired,
// };

// Export component
export default Lists;
