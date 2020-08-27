var express = require("express");
var router = express.Router();
var sequelize = require("../db");
const validateSession = require("../middleware/validate-session");
var Beer = sequelize.import("../models/beer");

///CREATE POST//
router.post("/:create", validateSession, (req, res) => {
  const beer = {
    name: req.body.beer.name,
    brewery: req.body.beer.brewery,
    abvibu: req.body.beer.abvibu,
    location: req.body.beer.location,
    comments: req.body.beer.comments,
    owner: req.user.id,
  };
  Beer.create(beer)
    .then((beer) => res.status(200).json(beer))
    .catch((err) => res.status(500).json({ error: err }));
});

///GET LOGS FOR USER//
router.get("/:mine", validateSession, function (req, res) {
  let owner = req.user.id;
  Beer.findAll({
    where: { owner: owner },
  })
    .then((beer) => res.status(200).json(beer))
    .catch((err) => res.status(500).json({ error: err }));
});

///GET LOGS FOR all//


router.get("/", (req, res) => {
    Beer.findAll()
    .then(beer =>res.status(200).json(beer))
    .catch(err => res.status(500).json({error: err}))
})

//	Allows individual logs to be updated by a user.

router.put("/:update", validateSession, function (req, res) {
  const updateBeer = {
    name: req.body.beer.name,
    brewery: req.body.beer.brewery,
    abvibu: req.body.beer.abvibu,
    location: req.body.beer.location,
    comments: req.body.beer.comments,
  };

  const query = { where: { id: req.params.id } };

  Beer.update(updateBeer, query)
    .then((beer) => res.status(200).json(beer))
    .catch((err) => res.status(500).json({ error: err }));
});

//DELETE LOG//

router.delete("/:id", validateSession, function (req, res) {
  const query = { where: { id: req.params.id } };

  Beer.destroy(query)
    .then(() => res.status(200).json({ message: "Log removed" }))
    .catch((err) => res.status(500).json({ error: err }));
});

module.exports = router;
