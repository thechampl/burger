var express = require("express");

var router = express.Router();

var burger = require ("../models/burger.js");







router.get("/", function (req, res) {
    burger.selectAll(function(data){
        var hbsObject ={
            burger: data
        };
    console.log(hbsObject);
    res.render("index", hbsObject);
    });
    });


    router.post("/api/burgers", function(req, res) {
      console.log(req.body)
        burger.create([
          "burger_name", "devoured"
        ], [
          req.body.burger_name, false
        ], function(result) {
          // Send back the ID of the new quote
          //res.json({ id: result.insertId });
          res.redirect("/")
        });
      });

    router.put("/api/burgers/:id", function(req,res){
        var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update({
    devoured: req.body.devoured
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});


      

module.exports = router;
