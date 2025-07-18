const asyncHandler = require("express-async-handler");
const contact = require("../../models/sql/contactModel")

// @desc Get particular contact
// @route GET /api/contacts/:id
// @access public

const getContactSql = asyncHandler(async (req, res) => {
  return res
    .status(200)
    .json({ message: `Got contact details of ${req.params.id}` });
});

// @desc Get all contact
// @route GET /api/contacts/
// @access public

const getContactsSql = asyncHandler(async (req, res) => {
  try {
    const [rows] = await contact.findAll()
    return res.status(200).json(rows);
  } catch (err) {
    console.error(err.message);
  }
});

// @desc Update particular contact
// @route PUT /api/contacts/:id
// @access public

const updateContactSql = asyncHandler(async (req, res) => {
  return res
    .status(200)
    .json({ message: `Updated details of ${req.params.id}` });
});

// @desc Create contact
// @route POST /api/contacts/
// @access public

const createContactSql = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are required");
  }
  return res.status(200).json({ message: `Created contact ${name}` });
});

// @desc Delete particular contact
// @route DELETE /api/contacts/:id
// @access public

const deleteContactSql = asyncHandler(async (req, res) => {
  return res
    .status(200)
    .json({ message: `Deleted contact details of ${req.params.id}` });
});

module.exports = {
  getContactSql,
  getContactsSql,
  createContactSql,
  updateContactSql,
  deleteContactSql,
};
