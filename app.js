/**
 * Created by john.nana on 4/7/2015.
 */
var _ = require("lodash");

var Agenda = require("agenda");
var Cron = require("./libs/cronjob");




var agenda = new Agenda({db: { address: 'localhost:27017/bday'}});

Cron.sendWishes(agenda);


//agenda.every('24 hours', 'delete old users');
//agenda.every('5 seconds', 'delete old users');
agenda.schedule('at 9:47', 'delete old users');
// Alternatively, you could also do:



agenda.start();

