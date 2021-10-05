// Import packages/modules/hooks
import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import { isUserAuthenticated}  from '../../utils/auth';

const ProtectedRoute = ({isAuth, component:Component, dataLists, ...rest}) => {
  
  return <Route {...rest} render={(props)=> {
    if (isUserAuthenticated()) {
      return <Component dataLists={dataLists} {...props}/>
    } else {
      return <Redirect to={{pathname:"/signin", state: {from: props.location}}}/>
    }
  }}/>;

}

export default ProtectedRoute

// function ProtectedRoute({isAuth:isAuth, component:Component, ...rest}) {
//   return <Route {...rest} render={(props)=> {
//     if (isAuth) {
//       return <Component />
//     } else {
//       return <Redirect to={{pathname:"/signin", state:{from:props.index}}}/>
//     }
//   }}/>;
 

  

