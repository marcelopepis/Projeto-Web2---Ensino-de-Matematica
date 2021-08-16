import React from 'react';
import { IsAuthenticated } from './Auth';
import { Route, Redirect } from "react-router-dom";


const PrivateRoute = ({ component: Component, ...rest}) => (
  <Route 
      {...rest}
        render={props =>  
          IsAuthenticated() ? (
            <Component { ...props} />
      ) : (
        <Redirect to={{ pathname: '/', state: { from: props.location } }}/>
      )
    }
  />
);

export default PrivateRoute
