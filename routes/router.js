const client = require('../packages/require').client;
const path = require('path');
const router = require('express').Router();

// GET /
let counter = 0;
router.get('/', (req, res) => {
    client.get(req.cookies.user, (err, reply) => {
        if (err) console.log(err);
        if (reply) {
            console.log(`Found user! ${reply}`);
        } else {
            const newId = uuidv4();
            const idStr = newId.toString();
            counter++;
            client.set(idStr, counter);
            res.cookie('user', idStr, {
                maxAge: 1000 * 60 * 60 * 24
            }); 
        }
        res.sendFile(path.join(__dirname, '../views/index.html'));
    });    
});

module.exports = router;