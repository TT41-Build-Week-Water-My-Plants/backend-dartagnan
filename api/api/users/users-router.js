const router = require("express").Router();
const restricted = require("../restricted");
const Users = require("../auth/auth-model");

router.get("/:id", restricted, (req, res) => {
  Users.findById(req.params.id)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => {
      res.status(500).json({ message: "something wrong in the router" });
    });
});

module.exports = router;
