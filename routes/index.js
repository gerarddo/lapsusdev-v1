var express = require("express");
var router = express.Router();


router.get("/", function(req, res){
    res.render("testindex")
}); //router.get

router.get("*", function(req, res){
    res.redirect("/")
}); //router.get

module.exports = router;