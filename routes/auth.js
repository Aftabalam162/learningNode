const express = require('express');

//router instance created
const router = express.Router();

router.post('/', (req,res) => {
    const {name} = req.body;
    if (name) {
        res.send('Done! Thank you!');
    } else {
        res.send('Please submit the data');
    }
});

module.exports = router;