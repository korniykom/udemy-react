const express = require("express");
const tourControler = require("../controler/tourControler.js");

const router = express.Router();

router.route("/").get(tourControler.getAllTours).post(tourControler.createTour);

router
  .route("/:id")
  .get(tourControler.getTour)
  .patch(tourControler.updateTour)
  .delete(tourControler.deleteTour);

module.exports = router;
