import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { travelContext } from '../../App';
const PrivateRoute = ({children, ...rest}) => {
    const [travelInformation, setTravelInformation] = useContext(travelContext)
    console.log(travelInformation);
    return (
        <Route
        {...rest}
        render={({ location }) =>
        travelInformation.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default PrivateRoute;