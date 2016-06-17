var express = require('express');
var path = require('path');
var nodemailer = require('nodemailer');

var routes = express();

routes.use(function(req, res, next) {
    console.log('Request for AFrame received.');
    console.log('REQ: ' + req.url);
});

routes.post('/mail', function(req, res, next) {
    console.log('MAIL endpoint');
    var mailOptions = {
        from: '"A-Frame Website" contactform@aframe.com',
        to: 'david.a.leroy@gmail.com',
        subject: 'TEST',
        text: 'TESTING the contact form'
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            res.send(500);
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);

        res.send(200);
    }); 
});
/*
routes.get('/', function(req, res) {
    console.log('Request received for AFrame');
    res.send('Aframe');
});
*/
module.exports = routes;
