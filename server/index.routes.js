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
    res.send('You got it!')   
});

module.exports = router;
