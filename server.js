var bodyParser = require("body-parser");
var fs = require("fs")
var express = require("express");
var app = module.exports = express();
var path = require('path');


const nodemailer = require('nodemailer');


var transporter = nodemailer.createTransport({
 service: 'gmail',
 auth: {
        user: 'artforteam2015@gmail.com',
        pass: '20101998artem'
    }
});

app.use(require('prerender-node').set('prerenderToken', 'g0l9Jstn8BcvTEL8ZhTM')); 
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
app.post('/sendmessage', function (req, res) {
   console.log(req.body);
   var mailOptions = {
   from: 'sever-express86@gmail.com', // sender address
   to: 'artforteam2015@gmail.com', // list of receivers
   subject: 'New Message', // Subject line
   html: '<p>'+req.body.name+'</p><p>'+req.body.svyaz+'</p><p>'+req.body.detail+'</p>'// plain text body
};
   transporter.sendMail(mailOptions, function (err, info) {
       if(err)
           console.log(err)
       else
           console.log(info);
});
});
app.get("/", function(req, res){ 
    res.sendFile(path.join(__dirname, 'index.html'))
});
app.get("/*", function(req, res){ 
    console.log(req.url);
    res.sendFile(path.join(__dirname, req.url))
});
// начинаем прослушивание подключений на 80 порту
app.listen(80,()=>console.log('server started'));

