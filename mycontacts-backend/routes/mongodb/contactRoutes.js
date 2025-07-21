const express = require("express");
const router = express.Router();

const {
  getContactDb,
  getContactsDb,
  createContactDb,
  updateContactDb,
  deleteContactDb,
} = require("../../controllers/mongodb/contactController");
const validateToken = require("../../middleware/validateTokenHandler");
router.use(validateToken);
router.route("/").get(getContactsDb).post(createContactDb);
router
  .route("/:id")
  .put(updateContactDb)
  .delete(deleteContactDb)
  .get(getContactDb);

// EXPORTING OUR ROUTER
module.exports = router;
