const path = require('path');
const mysql = require('mysql');
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const config = require('./config');
//const routes = require ('./routes/index');

const pool = mysql.createPool({
    ...config.db
});

app.get('/', (req, res) => res.send('Hello World!'))

let db = require('./mysql_db')(mysql, pool);

io.on('connection', (socket) => {
    
    //When user is connected & ready;
    socket.on('ready', () => { 
        db.getComments((err, res) => {
            if (err) console.log(err)
            else {
                console.log('User is connected');
                socket.emit('comment list', res);
            }
        });
    });

    //When comment is added
    socket.on('comment added', payload => {
        db.addComment(payload, (err, res) => {
            if (err) console.log(err)
            else {
                console.log('comment added by %s', payload.name);
                io.sockets.emit('new comment', res[0]);
            }
        });
    });

    // When user disconect
    socket.on('disconnect', () => {
        console.log('User left');
    });


    //Random test
    socket.on('ping', function () {
        console.log("PING!");
    });
    socket.on('pong', function () {
        console.log("PONG!");
    });
});

http.listen(config.app.port, () => {
    console.log('Server is running on port %d' , config.app.port);
});

