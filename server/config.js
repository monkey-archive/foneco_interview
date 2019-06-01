const config = {
    app: {
        port: process.env.PORT || 3003
    },
    db: {
        connectionLimit: process.env.LIMIT || 100,
        host: 'db',
        user: 'challenge',
        password: 'egnellahc',
        database: 'foneco',
        debug: false
    }
}

module.exports = config;