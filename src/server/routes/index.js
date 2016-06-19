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
    console.log('req.method: ' + req.method);
    console.log('req.params: ' + JSON.stringify(req.params));
    console.log('req.path: ' + req.path);
    console.log('req.body: ' + JSON.stringify(req.body));
    console.log('---------------------------------------');
    next();
});

routes.post('/mail', function(req, res, next) {
    var mailOptions = {};
    console.log('Attempting to send email.');

    if (!(body && body.name && body.email && body.message)) {
        res.send(500);
        return console.log('req.body is missing the required values.');
    }

    mailOptions = {
        from: req.body.name,
        to: 'a.frame.office@gmail.com',
        subject: 'A-frame website contact form.',
        text: req.body.message
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            res.send(500);
            console.log('Message failed.');
            return console.log(error);
        }

        res.send(200);
        console.log('Message sent: ' + info.response);
    }); 
});

module.exports = routes;
