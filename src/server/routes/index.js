var express = require('express');
var path = require('path');
var nodemailer = require('nodemailer');
var sendmailTransport = require('nodemailer-sendmail-transport');

var routes = express();
var options = {
    path: '/usr/lib/sendmail'
}

var transporter = nodemailer.createTransport(sendmailTransport(options))

routes.use(function(req, res, next) {
    console.log('----- Request for AFrame received.-----');
    console.log('req.url: ' + req.url);
    console.log('req.baseUrl: ' + req.baseUrl);
    console.log('req.method: ' + req.method);
    console.log('req.originalUrl: ' + req.originalUrl);
    console.log('req.hostname: ' + req.hostname);
    console.log('req.params: ' + JSON.stringify(req.params));
    console.log('req.path' + req.path);
    console.log('---------------------------------------');
    next();
});

routes.post('/mail', function(req, res, next) {
    console.log('Attempting to send email.');
    var mailOptions = {
        from: '"A-Frame Website" contactform@aframe.com',
        to: 'david.a.leroy@gmail.com',
        subject: 'TEST',
        text: 'TESTING the contact form'
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            res.send(500);
            console.log('Message failed.');
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);

        res.send(200);
    }); 
});

module.exports = routes;
