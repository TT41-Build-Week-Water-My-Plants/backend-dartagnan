const router = require("express").Router();
const Plants = require("./plants-model");
const { checkPlantId, checkPlantPayload } = require("./plants-middleware");

router.get("/", (req, res, next) => {
  Plants.getPlants()
    .then((plants) => {
      res.status(200).json(plants);
    })
    .catch(next);
});

router.get("/:id", checkPlantId, (req, res, next) => {
  Plants.getPlantById(req.params.id)
    .then((plant) => {
      res.status(200).json(plant);
    })
    .catch(next);
});

router.post("/", checkPlantPayload, (req, res, next) => {
  Plants.createPlant(req.body)
    .then((plant) => {
      res.status(201).json(plant);
    })
    .catch(next);
});

router.put("/:id", checkPlantId, checkPlantPayload, (req, res, next) => {
  Plants.updatePlant(req.params.id, req.body)
    .then((plant) => {
      res.status(200).json(plant);
    })
    .catch(next);
});

router.delete("/:id", checkPlantId, (req, res, next) => {
  Plants.deletePlant(req.params.id)
    .then(() => {
      res
        .status(200)
        .json({
          message: `plant with id of ${req.params.id} deleted successfuly`,
        });
    })
    .catch(next);
});

router.use((err, req, res, next) => {
  res.status(500).json({
    message: "Something went wrong in the router",
    err: err.message,
    stack: err.stack,
  });
});

module.exports = router;
