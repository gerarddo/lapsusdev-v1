var express = require("express");
var router = express.Router();
var info = require('../info.json')

router.get("/", function(req, res){
    res.render("homepage")
}); //router.get
router.get("/portfolio", function(req, res){
    res.render("portfolio", {projects: info.projects})
}); //router.get
router.get("/old", function(req, res){
    res.render("old")
}); //router.get


router.get("*", function(req, res){
    res.redirect("/")
}); //router.get

module.exports = router;