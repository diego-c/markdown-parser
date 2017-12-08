const requires = require('../packages/require');

module.exports = requires.session({
    store: new requires.RedisStore({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        logErrors: true,
        client: requires.client,
        ttl: 260
    }),
    saveUninitialized: false,
    resave: false,
    secret: 'new client session',
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }
});