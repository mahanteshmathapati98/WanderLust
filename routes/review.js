const express = require("express");
const router = express.Router({mergeParams:true});
const wrapAsync = require("../utils/wrapAsync")
const { isLoggedIn,validateReview } = require("../middleware.js");


const reviewController = require("../controllers/reviews.js")

//REVIEWS
//POST ROUTE
router.post("/",
    isLoggedIn,
    validateReview,
    wrapAsync(reviewController.createReview));

//DELETE ROUTE
router.delete("/:reviewId", wrapAsync(reviewController.destroyReview));

module.exports = router;

