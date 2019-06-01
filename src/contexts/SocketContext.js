import React, { createContext } from 'react';

const SocketContext = createContext();

export default SocketContext;

function withSocketContext(Component) {
    return function WrapperComponent(props) {
        return (
            <SocketContext.Consumer>
                {socket => <Component {...props} socket={socket} />}
            </SocketContext.Consumer>
        );
    }
}

export { withSocketContext };