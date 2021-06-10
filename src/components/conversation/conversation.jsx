import React, {useState} from 'react';
import "./style.scss"
import axios from 'axios'
import Thread from "./thread"
import NewPost from "./newPost"


function Conversation (props) {
    const cancelTokenSource = axios.CancelToken.source();

    const {paper} = props

    const addThread = (thread) => {
        setThreads([thread,...threads])
    }

    const addReply = (reply) => {
        const index = threads.findIndex(x=> x._id === reply.parent);
        if (index === -1) return //Thread is missing. Nothing to update.
        else {
            const itemsS = [...threads.slice(0,index)] //All the threads up to the one we are about to modify
            const itemsE = [...threads.slice(index+1)] //All the threads after the one we are about to modify
            const unmodified = threads[index]
            const updated = Object.assign({}, unmodified, {children:[...unmodified.children,reply]}) //Add reply to the array of children in the thread
            const newThreads = [...itemsS,updated,...itemsE]
            setThreads(newThreads)
        }




    }



    const [threads,setThreads] = useState([])
    React.useEffect(()=>{
        axios({
            cancelToken: cancelTokenSource.token,
            method: "get",
            params:{
                paper:paper
            },
            withCredentials: true,
            url: `http://localhost:3001/discussion/threads`
        }).then(data => {
            if(data.status===200) {
                setThreads(data.data)
            };

        })
        return function cleanup() {
            cancelTokenSource.cancel();
        };
    },[paper])

        return (
            <div className="conversation">
                <NewPost type="Thread"
                         paper={paper}
                         key={Date.now()}
                         addNew ={addThread}
                />

                {threads.map(thread=>
                    <Thread
                        key={thread._id}
                        thread={thread}
                        addNew = {addReply}
                    />
                )}
            </div>
        )
}

export default Conversation;