const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

// @desc Get particular contact
// @route GET /api/contacts/:id
// @access public

const getContact = asyncHandler(async (req, res) => {
  const contacts = Contact.find();
  return res
    .status(200)
    .json({ message: `Got contact details of ${req.params.id}` });
});

// @desc Get all contact
// @route GET /api/contacts/
// @access public

const getContacts = asyncHandler(async (req, res) => {
  return res.status(200).json({ message: `Got all contacts` });
});

// @desc Update particular contact
// @route PUT /api/contacts/:id
// @access public

const updateContact = asyncHandler(async (req, res) => {
  return res
    .status(200)
    .json({ message: `Updated details of ${req.params.id}` });
});

// @desc Create contact
// @route POST /api/contacts/
// @access public

const createContact = asyncHandler(async (req, res) => {
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

const deleteContact = asyncHandler(async (req, res) => {
  return res
    .status(200)
    .json({ message: `Deleted contact details of ${req.params.id}` });
});

module.exports = {
  getContact,
  getContacts,
  createContact,
  updateContact,
  deleteContact,
};
