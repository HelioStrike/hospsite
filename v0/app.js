var express     = require("express"),
    app         = express(),
    request     = require('request'),
    bodyParser  = require('body-parser'),
    mongoose    = require('mongoose');

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));

app.use("/", require("./routes/index"));

app.listen(3000, '0.0.0.0', function() {
  console.log("app started");
});
