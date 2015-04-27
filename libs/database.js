var mongoose = require("mongoose"),
    mongooseTimestamps = require("mongoose-concrete-timestamps"),
    autoIncrement = require("mongoose-auto-increment"),
    config = require("../config"),
    Grid = require("gridfs-stream");



 mongoose.connect( config.database['development'].url + "" + config.database['development'].name );
var db = mongoose.connection;
db.on("error",function(errMsg){
    console.log("Error Connecting to Mongo: " + errMsg);
});
mongoose.set('debug', true);

mongoose.plugin(mongooseTimestamps);
autoIncrement.initialize(db);
module.exports = mongoose;