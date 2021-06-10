import React from 'react';
import PostParser from "./postParser";

function Post (props) {




        return (
            <div ref={props._id}>
                <div>User info: {props.author.firstName} {props.author.lastName}</div>
                <PostParser>
                    {props.content}
                </PostParser>
            </div>
        )

}

export default Post;