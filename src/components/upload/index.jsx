import React, {useState,useEffect} from 'react';

import PaperUploadForm from "./paperUploadForm";
import './style.scss'
import {auth_check} from "../../auth_check";
import Authenticator from '../shared/authenticator'
import {Container} from "@material-ui/core";

export default function Index () {
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        async function fetchData() {
            const loggedIn = await auth_check()
            if(loggedIn) setLoading(false)
            else {
                console.log("not logged in")
            }
        }
        fetchData()

    },[])

    if(loading) return (<div>Loading.... </div>)

    return (

        <div>
            <Authenticator/>
            <Container maxWidth="sm">
                <h1>Upload Page</h1>
                <div className=".container-lg">
                    <PaperUploadForm/>
                </div>
            </Container>
        </div>
    )
}