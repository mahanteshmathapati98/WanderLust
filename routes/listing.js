const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const {isLoggedIn,isOwner,validateListing} = require("../middleware.js");
const listiningController = require("../controllers/listings.js");
const multer  = require('multer');
const {storage} = require("../cloudcofig.js");
const upload = multer({ storage });

router
    .route("/")
    // INDEX ROUTE
    .get(wrapAsync(listiningController.index))
    // CREATE ROUTE
    .post(
    isLoggedIn,
    upload.single('image'),
    validateListing,
    wrapAsync(listiningController.createListing));


// NEW ROUTE
router.get("/new",isLoggedIn, listiningController.renderNewForm);

router.route("/:id")
// SHOW ROUTE
    .get( wrapAsync(listiningController.ShowListing))
// UPDATE ROUTE
    .put(
        isLoggedIn,
        isOwner,
        upload.single('image'),
        validateListing, 
        wrapAsync(listiningController.updateListing))
 // DELETE ROUTE
    .delete(
        isLoggedIn, 
        isOwner,
        wrapAsync(listiningController.deleteListing));

// EDIT ROUTE
router.get("/:id/edit",
    isLoggedIn,
    isOwner,
    wrapAsync(listiningController.editForm));

module.exports = router;