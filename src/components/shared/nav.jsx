import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {useSelector, useDispatch} from "react-redux";
import {logout} from '../../actions'
import Authenticator from "./authenticator"
import UserInfo from "./userInfo";

function Nav() {

    let authenticated = useSelector(state => state.authenticated)
    const dispatch = useDispatch()

    const doLogout = async () => {
       const data = await axios({
            method:"get",
            withCredentials:true,
            url:"http://localhost:3001/logout"
        })
        if(data.status===200) {
            console.log("Logged out comone")
            dispatch(logout())
        }
    }

    return (

        <div className="Nav">
            <Authenticator />
            <UserInfo />
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <h3 className="navbar-brand">Logo</h3>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <Link to="/">
                                <li className="nav-item">Home</li>
                            </Link>
                            {!authenticated &&
                            <Link to="/register">
                                <li className="nav-item">Register</li>
                            </Link>}
                            {!authenticated &&
                            <Link to="/login">
                                <li className="nav-item">Login</li>
                            </Link>}
                            {authenticated &&
                            <Link to="/upload">
                                <li className="nav-item">Upload</li>
                            </Link>}
                            <Link to="/papers">
                                <li className="nav-item">Papers</li>
                            </Link>
                            {authenticated &&
                            <Link to="/profile">
                                <li className="nav-item">Profile</li>
                            </Link>}
                            {authenticated &&
                            <Link to="/logout" onClick={doLogout}>
                                <li className="nav-item">Log out</li>
                            </Link>}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav