const requires = require('./packages/require');
const router = require('./routes/router');
const db = require('./db/connection');
require('./io/socket');

requires.app.use(requires.helm());
requires.app.use(requires.parser());
requires.app.use(db);

requires.app.use(requires.express.static(requires.path.join(__dirname, 'public')));

requires.app.use(router);

requires.server.listen('4000', () => console.log('running app on port 4000'));


/*
 *  AJAX route
 */ 

// Populate req.body for the AJAX route

/*
app.use(express.json());
app.post('/', (req, res) => {
    let txt = req.body.text;
    txt = md.render(txt);
    res.setHeader('Content-Type', 'text/html');
    res.send(txt);
})
*/