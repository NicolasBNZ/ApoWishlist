// Import packages/modules
import React from 'react';
import { Link, Redirect, useParams } from "react-router-dom";
import PropTypes from 'prop-types';

// Import components
import DeleteItem from './DeleteItem';

// Import style
import './list.scss';

// Component
const Items = ({ dataId, dataTitle, dataComent, dataItems }) => {

  const { id } = useParams();

  return (

    <div className="Items">

      <div className="head-div">
        <div className="head-icon-back-medium">
          <Link to={`/lists`}>
            〈
          </Link>
        </div>
        <div className="head-title">
          <h2>{dataTitle}</h2>
        </div>
        <div className="head-icon-add-div">
          <div className="head-icon-add">
            <Link to={`/list/${id}/createitem`}> + </Link>
          </div>
        </div>
      </div>

      <div className="list-coment-description">
        <p>
          {dataComent}
        </p>
      </div>


      {/* ---------- LOOP START ---------- */}

      <div className="list-allitems-div">

        {dataItems
          .sort(({ id: previousID }, { id: currentID }) => currentID - previousID)
          .map((item) => (

            <div key={item.id} className="list-oneitem-div">

              <Link to={{ pathname: item.url }} target="_blank">
                <img src={item.image_url} alt={item.title} className="item-image-thumbnail" />
              </Link>

              <Link to={{ pathname: item.url }} target="_blank">
                <div className="list-oneitem-image-div" style={{ 
                  backgroundImage: `url(${item.image_url})`,
                  width:'100%', 
                  backgroundRepeat: 'no-repeat',
                  filter: 'blur(1.2px)',
                  backgroundSize: 'cover', 
                  backgroundPosition: 'center center', }} >
                </div>
              </Link>

              <div className="list-oneitem-infos">
                <Link to={{ pathname: item.url }} target="_blank">
                  <h3>{item.title}</h3>
                  <p className="item-coment">{item.coment}</p>
                </Link>
                <DeleteItem itemObj={item} listId={dataId} />
              </div>

            </div>

          ))
        }

      </div>

      {/* ---------- LOOP END ---------- */}

    </div>

  )

};

// TODO : propTypes !!!

// Export component
export default Items;
