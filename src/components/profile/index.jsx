import React from 'react'
import Login from '../login/login'
import Passport from "./passport"
import './style.scss'
import {useSelector} from "react-redux";

export default function Index() {
    const user = useSelector(state => state.user)

    if(user) {
        return (
            <div>
                <Passport />

            </div>
        )
    } else {
        return (
            <Login />
        )
    }
}