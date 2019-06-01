import React from 'react'
import ReactDOM from 'react-dom'
import io from "socket.io-client";

import CommentListSkeleton from './components/skeleton/CommentListSkeleton'
import CommentForm from './containers/CommentForm'
import CommentList from './containers/CommentList'
import SocketContext from './contexts/SocketContext'

import './styles/global.css'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            connected: false
        }
    }

    componentDidMount() {
        let socket = io.connect('http://127.0.0.1:3003');
        socket.on('connect', () => {
            console.log('Successfully connected!');
            this.setState({connected: true})
        });
        this.setState({socket});
    }

    render() {
        return (
            <SocketContext.Provider value={this.state.socket}>
                <div className="container main">
                    {this.state.connected && <CommentList/>
                        || <CommentListSkeleton/>
                    }
                    <CommentForm/>
                </div>
            </SocketContext.Provider>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));