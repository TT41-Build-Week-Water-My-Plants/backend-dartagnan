const router = require("express").Router();
const restricted = require("../restricted");
const Users = require("../auth/auth-model");
const bcrypt = require("bcryptjs");
const { checkUserId } = require("./users-middleware");

router.get("/:id", restricted, checkUserId, (req, res) => {
  Users.findById(req.params.id)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch(() => {
      res.status(500).json({ message: "something wrong in the router" });
    });
});

router.put("/:id", restricted, checkUserId, (req, res, next) => {
  const credentials = req.body;

  if (!credentials.password || !credentials.phone_number) {
    res
      .status(400)
      .json({ message: "username, password, and phone number required" });
  } else {
    const rounds = process.env.BCRYPT_ROUNDS || 8;
    const hash = bcrypt.hashSync(credentials.password, rounds);
    credentials.password = hash;

    Users.updateUser(req.params.id, credentials)
      .then((user) => {
        res.status(201).json(user);
      })
      .catch(next);
  }
});

router.use((err, req, res, next) /*eslint-disable-line*/ => {
  res.status(500).json({
    message: "Something went wrong in the router",
  });
});

module.exports = router;
