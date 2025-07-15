const express = require("express");
const errorHandler = require("./middleware/errorHandler");

const dotenv = require("dotenv").config();

const app = express();

// DEFINING THE PORT
const port = process.env.PORT || 5000;

// Use to parse the data from json format passed
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// CREATING MIDDLEWARE: MAIN ROUTE THAT IS CREATING ROUTES FOR DIFFERENT ONES
app.use("/api/contacts", require("./routes/contactRoutes"));

// Custom ErrorHandler from middleware
app.use(errorHandler);


// DEFINING OUR APP ON THIS PORT WITH MESSAGE
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
