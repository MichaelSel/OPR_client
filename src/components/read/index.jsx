import React, {useState} from 'react'
import axios from 'axios'
import Conversation from "../conversation/conversation";
import './style.scss'
import {useParams} from 'react-router-dom'
import PaperViewer from "./paperViewer";
import ConvoDock from "./ConvoDock";
import {Container} from "@material-ui/core";

export default function Index() {
    let { paper } = useParams();
    const [paperObject,setPaperObject] = useState("")


    React.useEffect(()=>{
        axios({
            method: "get",
            withCredentials: true,
            url: "http://localhost:3001/papers/get/" + paper
        }).then(data => {
            if(data.status===200) {
                setPaperObject(data.data)
            };

        })
    },[])


    return (
        <div>
            <h1>Read Paper</h1>
            <div>
                <Container maxWidth="md">
                    <PaperViewer paper={paperObject}/>
                </Container>
                <ConvoDock>
                    <Container maxWidth="md">
                        <Conversation paper={paper}/>
                    </Container>
                </ConvoDock>
            </div>
        </div>
    )
}