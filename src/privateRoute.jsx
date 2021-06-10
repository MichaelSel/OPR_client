import React from 'react';
import {Route,Redirect} from 'react-router-dom'
import {useSelector} from "react-redux";


export const PrivateRoute = ({Comp:Component, ...rest}) => {
    let authenticated = useSelector(state => state.authenticated)
    return (
        <Route {...rest} render={
            (props) => {
                delete props.staticContext
                if(authenticated) return <Component {...props}/>
                else return <Redirect to={
                    {
                        pathname: "/",
                        state: {
                            from: props.location
                        }
                    }
                }/>

            }
        }/>
    )
}