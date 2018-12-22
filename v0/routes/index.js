var express = require("express"),
    router = express.Router();

router.get("/", function(req, res) {
  res.render("index");
});

router.get("/doctors", function(req, res) {
  res.render("doctors");
});

module.exports = router;
