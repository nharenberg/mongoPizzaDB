var express = require("express");
var router = express.Router();
let Pizza = require("../models/pizza");


router.get('/', (req,res) => {

  Pizza.find({}, (err, pizzas) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.send(pizzas);
    }

  });
});


router.get("/:id", (req,res) => {

  Pizza.findOne({_id: req.params.id}, (err, pizza) =>{ 

  })

    Pizza.findById(req.params.id, (err, pizza)=> {

      if(err || pizza) {
        res.status(400).send(err || "Pizza not Found.")
      } else {
        res.send(pizza);
      }
  })
});


router.delete("/:id", (req, res) => {

  Pizza.findByIdAndRemove(req.params.id, (err, pizza) => {
    if(err || pizza) {
      res.status(400).send(err || "Pizza not Found.")
    } else {
      res.send(pizza);
      }
    })
});


router.put("/:id", (req, res) => {
  Pizza.findByIdAndUpdate(req.params.id, (err, pizza) => {
    if(err || pizza) {
      res.status(400).send(err || "Pizza not Found.")
    } else {
      res.send(pizza);
      }
    })
});


router.post("/:id", (req, res) => {

  let pizza = new Pizza(req.body);

  pizza.save((err, savedPizza) => {
    res.status(err ? 400: 200).send(err);
  })

});

module.exports = router;