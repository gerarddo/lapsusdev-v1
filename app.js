var express                             = require("express"),
    app                             	= express(),
    bodyParser                      	= require("body-parser");

        // routes
var indexRoutes                 = require("./routes/index");


// opn = require('opn'); // for opening localhost:{{port}} in default browser

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
// section-container

app.use(indexRoutes);



let port = 3000;
// app.listen(process.env.PORT, process.env.IP, function(){
app.listen(process.env.PORT || port, process.env.IP, function(){
    console.log("-------------------------")
    console.log("portfolioproj server is running on port " + port)
    console.log("-------------------------")
});

// opn('http://localhost:' + port);



