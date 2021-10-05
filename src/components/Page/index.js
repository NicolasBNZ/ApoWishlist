// Import packages/modules
import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';

// Import components
import Home from 'src/components/Home';
import Signin from 'src/components/Signin';
import Signup from 'src/components/Signup';
import Header from 'src/components/Header';
import Lists from 'src/components/Lists';
import List from 'src/components/List';
import CreateList from 'src/components/CreateList';
import CreateItem from 'src/components/CreateItem';
import Legal from 'src/components/Footer/Legal';
import Contact from 'src/components/Footer/Contact';
import Notfound from 'src/components/Notfound';
import ProtectedRoute from 'src/components/Page/ProtectedRoute';
import About from 'src/components/Footer/About';

// Auth
import { isUserAuthenticated } from '../../utils/auth';
import { getToken } from '../../utils/auth';

// Import style-sheet
import './page.scss';

// Component
const Page = () => {

  // State
  const [dataLists, setDataLists] = useState([]);

  const loadLists = () => {

    // The token is placed in localstorage in Signin/index
    const token = getToken();

    // HTTP client
    if (isUserAuthenticated()) {
      axios.get(`${process.env.REACT_APP_API}/lists`, {
        headers: { 'Authorization': `Bearer ${token}` }
      })
        .then((response) => {
          const { data } = response;
          setDataLists(data)
          console.log('response dans page après get: ', response)
        })
        .catch((error) => {
          console.log(error);
        })
    }

  };

  // useEffect(() => {
  //   loadLists();
  // }, [setDataLists]);

  return (

    <div className="page">

      <Switch>

        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/legal" exact>
          <Header />
          <Legal />
        </Route>

        <Route path="/contact" exact>
          <Header />
          <Contact />
        </Route>

        <Route path="/about" exact>
          <Header />
          <About />
        </Route>

        <Route path="/signin" exact>
          <Signin />
        </Route>

        <Route path="/signup" exact>
          <Signup />
        </Route>

        <ProtectedRoute component={Lists} dataLists={dataLists} path="/lists" exact />

        <ProtectedRoute component={List} dataLists={dataLists} path="/list/:id" exact />

        <ProtectedRoute component={CreateList} dataLists={dataLists} path="/lists/createlist" exact />

        <ProtectedRoute component={CreateItem} dataLists={dataLists} path="/list/:id/createitem" exact />

        <Route path="/notfound" exact>
          <Header />
          <Notfound />
        </Route>

        <Route >
          <Notfound />
          <Header />
        </Route>

      </Switch>

    </div>

  )

};

// Component export
export default Page;
