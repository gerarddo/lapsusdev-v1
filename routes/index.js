var express = require("express");
var router = express.Router();


router.get("/", function(req, res){
    res.render("homepage")
}); //router.get
router.get("/old", function(req, res){
    res.render("index")
}); //router.get


router.get("*", function(req, res){
    res.redirect("/")
}); //router.get

module.exports = router;