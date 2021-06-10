import React, {useState} from 'react'
import './style.scss'
import axios from 'axios'
import PaperEntry from "./paperEntry";


export default function Index() {
    const [papers, setPapers] = useState([])
    React.useEffect(()=>{
        axios({
            method: "get",
            withCredentials: true,
            url: "http://localhost:3001/papers"
        }).then(data => {
            if(data.status===200) {
                setPapers(data.data)
            };

        })
    },[])



    return (
        <div>
            <h1>Papers Page</h1>
            {papers.map(paper=>
                <PaperEntry paper={paper} key={paper._id}></PaperEntry>

            )}

        </div>
    )
}