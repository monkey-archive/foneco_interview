const db = (mysql, pool) => {
    return {
        getComments: (callback) => {
            pool.getConnection((err, connection) => {
                if (err) callback(err, []);
                else {
                    let sql_query = `select * from comments`;
                    connection.query(sql_query, (err, res) => {
                        connection.release();
                        if (err) callback(err, []);
                        else callback(false, res);
                    });
                }
            })
        },
        addComment: (payload, callback) => {
            pool.getConnection((err, connection) => {
                if (err) callback(err, false);
                else {
                    let sql_query = `insert into ?? (??, ??, ??) values (?, ?, ?)`;
                    let inserts = ["foneco.comments", 'name', 'email', 'comment', payload.name, payload.email, payload.comment];
                    sql_query = mysql.format(sql_query, inserts);
                    connection.query(sql_query, (err) => {
                        if (err) callback(err, false);
                    });
                    sql_query = `select * from comments order by id desc limit 1`;
                    connection.query(sql_query, (err, res) => {
                        connection.release();
                        if (err) callback(err, false);
                        else callback(false, res);
                    });
                }
            })
        }
    }
};

module.exports = db;