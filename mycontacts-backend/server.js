const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectMongoDb = require("./config/mongoDB");
const { pool, testMysqlConnection } = require("./config/mysql");
require("dotenv").config();

const app = express();

// DEFINING THE PORT
const port = process.env.PORT || 5000;

// Use to parse the data from json format passed
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CONNECTING TO DATABASES:
async function startServer() {
  try {
    await testMysqlConnection();

    await connectMongoDb();

    // DEFINING OUR APP ON THIS PORT WITH MESSAGE
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (err) {
    console.error("Failed to start the server: ", err.message);
    process.exit(1);
  }
}

startServer();

// CREATING MIDDLEWARE: MAIN ROUTE THAT IS CREATING ROUTES FOR DIFFERENT ONES
app.use("/api/contacts", require("./routes/contactRoutes"));

// Custom ErrorHandler from middleware
app.use(errorHandler);
