import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import UserContext from '../Contexts/userContext';



export const PrivateRoute = ({component: Component, ...rest}) => {

    const UserData = useContext(UserContext)

    return (
        <Route {...rest} render={props => (
            UserData.isUserLogedIn ?
                <Component {...props} />
            : <Redirect to="/login" />
        )} />
    );
};

export const PublicRoute = ({component: Component, restricted, ...rest}) => {
    const UserData = useContext(UserContext)
    return (
        <Route {...rest} render={props => (
            UserData.isUserLogedIn && restricted ?
                <Redirect to="/" />
            : <Component {...props} />
        )} />
    );
};