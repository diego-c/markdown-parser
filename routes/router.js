const requires = require('../packages/require'),
router = require('express').Router();

// GET /
let counter = 0;
router.get('/', (req, res) => {
    requires.client.get(req.cookies.user, (err, reply) => {
        if (err) console.log(err);
        if (reply) {
            console.log(`Found user! ${reply}`);
        } else {
            const newId = requires.uuidv4();
            const idStr = newId.toString();
            counter++;
            requires.client.set(idStr, counter);
            res.cookie('user', idStr, {
                maxAge: 1000 * 60 * 60 * 24
            }); 
        }

        res.sendFile(requires.path.join(__dirname, '../views/index.html'));
    });    
});

module.exports = router;