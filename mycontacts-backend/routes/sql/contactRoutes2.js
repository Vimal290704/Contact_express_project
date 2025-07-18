const express = require("express");
const router = express.Router();

const {
  getContactSql,
  getContactsSql,
  createContactSql,
  updateContactSql,
  deleteContactSql,
} = require("../../controllers/sql/contactController2");

router.route("/").get(getContactsSql).post(createContactSql);
router
  .route("/:id")
  .put(updateContactSql)
  .delete(deleteContactSql)
  .get(getContactSql);

// EXPORTING OUR ROUTER
module.exports = router;
