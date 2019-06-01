import React from 'react';
import Comment from '../components/Comment'
import { withSocketContext } from '../contexts/SocketContext'

class CommentList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: []
        };
    }
    
    componentDidMount() {
        let {socket} = this.props;
        socket.on('comment list', comments => {
            this.setState({comments});
        });
        socket.on('new comment', comment => {
            this.setState({comments: [...this.state.comments, comment]})
        });
        socket.emit('ready');
    }

    render() {
        return (
            <div className="comment-list">
                <h3>Comments</h3>
                <div className="comments">
                    {this.state.comments.map((comment,index) =>
                        <Comment key={index} {...comment} index={index}/>
                )}</div>
            </div>
        );
    }
}

export default withSocketContext(CommentList);