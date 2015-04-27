/**
 * Created by john.nana on 4/8/2015.
 */


var rekuire = require("rekuire");

var _ = require("lodash");
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/bday';

//get model
var Employee = rekuire("Employee");

var sendgrid = require("sendgrid")("internalit", "Sec12ret#");
var nunjucks = require("nunjucks");

var msg= [];

    msg[0] = "<html> <head> <title></title> </head> <body> <style type='text/css'>p    {color:#05C5FA} </style> <p><span class='sg-image' style='float: none; display: inline-block; text-align: left;'><img height='120' src='https://marketing-image-production.s3.amazonaws.com/uploads/d24ccc636c57f8f36808d1621c1f3c027b8ecf1cfe147bef4937a66349f75688af65bca8637b549c455e3565768ec1ecd033bf8dbc29f1acd8a7dee75e734a64.png' width='800' /></span></p>  <p>Dear {{fname}},</p>  <p>&nbsp;</p>  <p>The crew of Internet Solutions, Nigeria would like to wish you a very Happy Birthday!</p>  <p>&nbsp;</p>  <p>We &nbsp;wish you a day filled with laughter and lots of happiness and may you have every reason to celebrate for the rest of the year and in years come.</p>  <p>&nbsp;</p>  <p>Have a wonderful celebration!!</p>  <p>&nbsp;</p>  <p><strong>IS HR Nigeria.</strong></p> </body> </html>";
    msg[1]= "<html> <head> <title></title> </head> <body> <style type='text/css'>p    {color:#05C5FA} </style> <p><span class='sg-image' style='float: none; display: inline-block; text-align: left;'><img height='120' src='https://marketing-image-production.s3.amazonaws.com/uploads/d24ccc636c57f8f36808d1621c1f3c027b8ecf1cfe147bef4937a66349f75688af65bca8637b549c455e3565768ec1ecd033bf8dbc29f1acd8a7dee75e734a64.png' width='800' /></span></p>  <p>Dear {{fname}},</p>  <p>&nbsp;</p>  <p>The crew of Internet Solutions, Nigeria would like to wish you a very Happy Birthday!</p>  <p>&nbsp;</p>  <p>We &nbsp;wish you a day filled with joy, laughter and lots of happiness. And as you look ahead to tomorrow, may all your deepest hopes and dreams come true.</p>  <p>&nbsp;</p>  <p>Have a phenomenal celebration!!</p>  <p>&nbsp;</p>  <p><strong>IS HR Nigeria.</strong></p> </body> </html>";
    msg[2]="<html> <head> <title></title> </head> <body> <style type='text/css'>p    {color:#05C5FA} </style> <p><span class='sg-image' style='float: none; display: inline-block; text-align: left;'><img height='120' src='https://marketing-image-production.s3.amazonaws.com/uploads/d24ccc636c57f8f36808d1621c1f3c027b8ecf1cfe147bef4937a66349f75688af65bca8637b549c455e3565768ec1ecd033bf8dbc29f1acd8a7dee75e734a64.png' width='800' /></span></p>  <p>Dear {{fname}},</p>  <p>&nbsp;</p>  <p>The crew of Internet Solutions, Nigeria would like to wish you a very Happy Birthday!</p>  <p>&nbsp;</p>  <p>May your birthday be filled with many happy hours and your life with many happy birthdays to come.</p>  <p><br /> Have a beautiful day!</p>  <p>&nbsp;</p>  <p>&nbsp;</p>  <p><strong>IS HR Nigeria</strong></p> </body> </html> ";
    msg[3]= "<html> <head> <title></title> </head> <body> <style type='text/css'>p    {color:#05C5FA} </style> <p><span class='sg-image' style='float: none; display: inline-block; text-align: left;'><img height='120' src='https://marketing-image-production.s3.amazonaws.com/uploads/d24ccc636c57f8f36808d1621c1f3c027b8ecf1cfe147bef4937a66349f75688af65bca8637b549c455e3565768ec1ecd033bf8dbc29f1acd8a7dee75e734a64.png' width='800' /></span></p>  <p>Dear {{fname}},</p>  <p>&nbsp;</p>  <p>The crew of Internet Solutions, Nigeria would like to wish you a very Happy Birthday!</p>  <p>&nbsp;</p>  <p>We wish you a joyful year filled with success, the sound of laughter and all the blessings that life can uphold.</p>  <p>&nbsp;</p>  <p><br /> Have a terrific celebration!</p>  <p>&nbsp;</p>  <p><strong>IS HR Nigeria.</strong></p> </body> </html> ";
    msg[4]= "<html> <head> <title></title> </head> <body> <style type='text/css'>p    {color:#05C5FA} </style> <p><span class='sg-image' style='float: none; display: inline-block; text-align: left;'><img height='120' src='https://marketing-image-production.s3.amazonaws.com/uploads/d24ccc636c57f8f36808d1621c1f3c027b8ecf1cfe147bef4937a66349f75688af65bca8637b549c455e3565768ec1ecd033bf8dbc29f1acd8a7dee75e734a64.png' width='800' /></span></p>  <p>Dear {{fname}},</p>  <p>&nbsp;</p>  <p>The crew of Internet Solutions, Nigeria would like to wish you a very Happy Birthday!</p>  <p>&nbsp;</p>  <p>On this special day, we wish that your heart be filled with happiness, success and joy and as you look ahead to tomorrow, may your deepest hopes and dreams come true for you!</p>  <p>&nbsp;</p>  <p>Have a Phenomenal birthday </p>  <p>&nbsp;</p>  <p>&nbsp;</p>  <p><strong><em>IS HR Nigeria</em></strong></p> </body> </html>";
    msg[5]= "<html> <head> <title></title> </head> <body> <style type='text/css'>p    {color:#05C5FA} </style> <p><span class='sg-image' style='float: none; display: inline-block; text-align: left;'><img height='120' src='https://marketing-image-production.s3.amazonaws.com/uploads/d24ccc636c57f8f36808d1621c1f3c027b8ecf1cfe147bef4937a66349f75688af65bca8637b549c455e3565768ec1ecd033bf8dbc29f1acd8a7dee75e734a64.png' width='800' /></span></p>  <p>Dear {{fname}},</p>  <p>&nbsp;</p>  <p>The crew of Internet Solutions, Nigeria would like to wish you a very Happy Birthday!</p>  <p>&nbsp;</p>  <p>We &nbsp;wish you a day filled with laughter and lots of happiness and may you have every reason to celebrate for the rest of the year and in years come.</p>  <p>&nbsp;</p>  <p>Have a wonderful celebration!!</p>  <p>&nbsp;</p>  <p><strong>IS HR Nigeria.</strong></p>  <p>&nbsp;</p>  <p><strong><em>IS HR Nigeria</em></strong></p> </body> </html> ";

var date = new Date();
var bdaymonth = date.getUTCMonth() + 1;
var bdaydate = date.getDate();
var bday = bdaydate+"/"+bdaymonth;



exports.sendWishes= function(agenda){
    agenda.define('delete old users', function(job, done) {

        console.log("Starting the cron agenda...");
        var q = Employee.find({}).exec();

        q.then(function(results){
            var employeeArray = _.map(results, function(employee){
                return employee.toObject();
            });

            var employee = _.filter(employeeArray, function(person){
                return person.DOB == bday; //bday
            }).map(function(person){
                bdayWishes(person);
                //console.log(person.Name);
            });

        });

        done();

        });



    };

    function bdayWishes(employee){

        var res = nunjucks.renderString(msg[_.random(0,5)],employee);
        var email = new sendgrid.Email();
        var subject = "Birthday Wishes to "+ employee.Name;
        var logmsg = subject + " sent successfully on " + date.getDate()+" " + monthNames[date.getMonth()];

        email.addTo("IS.NG.EVERYONE@za.didata.com");
        email.setFrom("blessing.michael-lawal@ng.is.co.za");
        email.setSubject(subject);
        email.setHtml(res);
        sendgrid.send(email, function(err, json) {
        if(err) console.log("i couldn't send");

        console.log(logmsg);
        });

    }



