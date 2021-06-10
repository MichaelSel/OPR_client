import React from 'react'
import './style.scss'
import Login from './login'

export default function Index() {
    return (
        <div>
            <h1>Login Page</h1>
            <div className="row">
                <div className="col"></div>
                <div className="col">
                    <Login />
                </div>
                <div className="col"></div>
            </div>
        </div>
    )
}