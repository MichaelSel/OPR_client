import React, {useState} from 'react';
import "./style.scss"
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import axios from 'axios'

function NewPost(props) {

    const {addNew} = props
    let authenticated = useSelector(state => state.authenticated)
    const [postContent, setPostContent] = useState("")
    const postMessage = async (e) => {

        const url = (props.type === "Thread") ? "http://localhost:3001/discussion/thread" : "http://localhost:3001/discussion/reply";
        try {
            const posting = await axios({
                method: "post",
                data: {
                    content: postContent,
                    paperId: props.paper,
                    parent: props.parent
                },
                withCredentials: true,
                url: url
            })

            addNew(posting.data)
        } catch (e) {
            console.error(e)
        }


    }


    if (authenticated) {
        return (
            // authenticated?<LoggedInDOM />:<LoggedOutDOM/>
            <div className="threadBox-container">
                <div className="passport">
                    User Info
                </div>
                <div className="message-container">
                <textarea className="message" value={postContent} name="message"
                          onChange={(e) => setPostContent(e.target.value)}></textarea>
                    <button type="submit" onClick={postMessage}>Post Message</button>
                </div>
            </div>
        )
    } else {
        return (
            // authenticated?<LoggedInDOM />:<LoggedOutDOM/>
            <div className="threadBox-container">
                <div>
                    <Link to="/login">Login</Link> to write a {props.type==="Thread"?"Post":"Reply"}
                </div>
            </div>
        )
    }


}

export default NewPost;