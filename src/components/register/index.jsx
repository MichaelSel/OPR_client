import React from 'react'
import './style.scss'
import Register from "./register";

export default function Index() {
    return (
        <div>
            <h1>Register Page</h1>
            <div className="row">
                <div className="col"></div>
                <div className="col">
                    <Register />
                </div>
                <div className="col"></div>
            </div>
        </div>
    )
}