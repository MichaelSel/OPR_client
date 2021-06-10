import React, {Component} from 'react';
import NewPost from "./newPost"
import Post from "./post"
class Thread extends Component {

    render () {

        const {_id,author,content,children,tags} = this.props.thread
        const {addNew} = this.props
        return (
            <div className="thread-container">
                <div className="parentMessage">
                    <div className="message">
                        <Post key={_id}
                              content={content}
                              author={author}
                              tags = {tags}
                        />
                    </div>
                </div>
                <div className="reply-container">
                    {children.map(reply=>
                        <div className="message" key={reply._id}>
                            <Post key={reply._id}
                                  content={reply.content}
                                  author={reply.author}
                                  tags = {reply.tags}
                            />
                        </div>
                    )}

                    <NewPost type="Reply"
                             key={Date.now()}
                             parent = {_id}
                             addNew = {addNew}
                    />

                </div>
            </div>
        )
    }
}

export default Thread;