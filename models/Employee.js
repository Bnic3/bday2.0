/**
 * Created by john.nana on 3/24/2015.
 */
var rekuire = require("rekuire"),
mongoose = rekuire("database"),
    Schema = mongoose.Schema;

var Employee = new Schema({
    DOB: String,
    Name: String,
    fname: String
});


module.exports = mongoose.model('Employee', Employee);

