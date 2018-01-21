var express = require("express");
var router = express.Router();


router.get("/", function(req, res){
    res.render("index")
}); //router.get

router.get("/tribute", function(req, res){
    res.render("(01)Tribute")
}); //router.get

router.get("*", function(req, res){
    res.redirect("/")
}); //router.get

module.exports = router;