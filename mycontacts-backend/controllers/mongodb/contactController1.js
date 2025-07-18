const asyncHandler = require("express-async-handler");
const Contact = require("../../models/mongodb/contactModel");

// @desc Get particular contact
// @route GET /api/contacts/:id
// @access public

const getContactDb = asyncHandler(async (req, res) => {
  return res
    .status(200)
    .json({ message: `Got contact details of ${req.params.id}` });
});

// @desc Get all contact
// @route GET /api/contacts/
// @access public

const getContactsDb = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  return res.status(200).json(contacts);
});

// @desc Update particular contact
// @route PUT /api/contacts/:id
// @access public

const updateContactDb = asyncHandler(async (req, res) => {
  return res
    .status(200)
    .json({ message: `Updated details of ${req.params.id}` });
});

// @desc Create contact
// @route POST /api/contacts/
// @access public

const createContactDb = asyncHandler(async (req, res) => {
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

const deleteContactDb = asyncHandler(async (req, res) => {
  return res
    .status(200)
    .json({ message: `Deleted contact details of ${req.params.id}` });
});

module.exports = {
  getContactDb,
  getContactsDb,
  createContactDb,
  updateContactDb,
  deleteContactDb,
};
