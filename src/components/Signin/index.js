// Import packages/modules
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

// Import components
import SigninForm from 'src/components/Signin/SigninForm';

// Auth
import { isUserAuthenticated, authenticateUser}  from '../../utils/auth';

// Import style-sheet
import './signin.scss';

// Component
const Signin = () => {

  // States
  const [error, setError] = useState("")
  const [isAuth, setIsAuth] = useState(isUserAuthenticated());

  // Called when attempt to login + error
  const Login = (details) => {

    // Axios to post log + pass the DDB
    axios.post(`${process.env.REACT_APP_API}/login`, {
      "email": details.email,
      "password": details.password
    })
    .then((response) => {
      // if answer succes = authentification
      authenticateUser(response.data.token)
      setIsAuth(true);
      // window.location.reload();
      // console.log("response.data.password: ", response.data.password, " doit correspondre à details.password: ", details.password);
      console.log("response.data.token: ", response.data.token);
      console.log("response post signin: ", response);
    })
    .catch((error) => {
      setError("mauvais email ou password");

    })

  }

  // // Logout
  // const Logout = () => {
  //   console.log("logout");
  //   setUser({
  //     email: "",
  //   });
  // }

  {/* <button onClick={Logout}>Logout</button> */ }
  
  if (isAuth) {
    return <Redirect to="/lists" />
  }

  return (
    <div className="signin">
      <SigninForm Login={Login} error={error} />
    </div>
  );

}

// Export component
export default Signin;
