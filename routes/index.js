var express = require("express");
var router = express.Router();


router.get("/", function(req, res){
    res.render("index")
}); //router.get

router.get("/tribute", function(req, res){
    res.render("01-Tribute")
}); //router.get

router.get("/portfolio", function(req, res){
    res.render("02-Portfolio")
}); //router.get

router.get("/quote", function(req, res){
    res.render("03-Quote")
}); //router.get

router.get("/weather", function(req, res){
    res.render("04-weather")
}); //router.get

router.get("*", function(req, res){
    res.redirect("/")
}); //router.get

module.exports = router;