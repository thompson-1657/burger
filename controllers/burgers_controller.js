const express = require("express");
const burger = require("../models/burger.js");
const router = express.Router();

router.get("/", function(req,res) {
    burger.all(function(data) {
        const hbsObject = {
            burger:data
        }
        console.log(hbsObject)
        res.render("index", hbsObject)
    })
})

router.post("/api/burgers", function (req, res) {
const burger_name = req.body.burger_name
  
  burger.create(burger_name),function (data) {
  burger.create([burger_name], [req.body.burger_name], function (data) {
  })
}
})



  router.delete("/api/burgers/:id", function (req, res) {
  const id = req.params.id
    console.log(req.params.id)
    burger.delete(id), function (data) {
        console.log(data)
    }
  })







module.exports = router