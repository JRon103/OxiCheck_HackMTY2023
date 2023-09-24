const express = require('express');
const router = express.Router();

router.post('/api', (req, res, next) => {
    const request = req.body;
    console.log('OK')
    // console.log(request);
    res.send(request);
});

router.get('/api', (req, res, next) => {
    console.log('OK');
    // res.send('You got it!')
    res.send({
        "First":[23,12, 78, 4, 54],
        "Second": [0, 13, 88, 1, 3],
        "Third": [45, 2, 546, 67, 56]
    });
});

module.exports = router;
