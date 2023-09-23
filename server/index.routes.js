const express = require('express');
const router = express.Router();

router.post('/send', (req, res, next) => {
    const request = req.body;
    console.log('OK')
    // console.log(request);
    res.send(request);
});

router.get('/give', (req, res, next) => {
    console.log('OK');
    res.send('You got it!')   
});

module.exports = router;