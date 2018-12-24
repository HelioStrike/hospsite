var express = require("express"),
    router = express.Router();

router.get("/", function(req, res) {
  res.render("index", {title: "Sree Charit Hospitals - Exclusive Neuro endocrine Center"});
});

router.get("/doctors", function(req, res) {
  res.render("doctors",{title: "Doctors - Sree Charit Hospitals"});
});

module.exports = router;
