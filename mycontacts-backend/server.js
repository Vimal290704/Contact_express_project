const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectMongoDb = require("./config/mongoDB"); // Mongoose connection function
const { sequelize, testSequelizeConnection } = require("./config/sequelize"); // Sequelize instance and test function
require("dotenv").config(); // Load environment variables

const app = express();

// DEFINING THE PORT
const port = process.env.PORT || 5000;

// Use to parse the data from json format passed
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CONNECTING TO DATABASES:
async function startServer() {
  try {
    // 1. Connect to MySQL via Sequelize and test the connection
    await testSequelizeConnection(); // This establishes and tests the Sequelize connection to MySQL

    // 2. Sync Sequelize models with the MySQL database

    await sequelize.sync();
    console.log("MySQL models synced successfully!");

    // 3. Connect to MongoDB via Mongoose
    await connectMongoDb();

    // DEFINING OUR APP ON THIS PORT WITH MESSAGE
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (err) {
    console.error("Failed to start the server: ", err.message);
    process.exit(1); // Exit if any database connection fails
  }
}

startServer();

// CREATING MIDDLEWARE: MAIN ROUTE THAT IS CREATING ROUTES FOR DIFFERENT ONES
// Ensure these route files exist and correctly export Express Router instances
app.use("/api/contacts/db", require("./routes/mongodb/contactRoutes1")); // Assuming this is MongoDB related
app.use("/api/contacts/sql", require("./routes/sql/contactRoutes2")); // Assuming this is MySQL related

// Custom ErrorHandler from middleware
app.use(errorHandler);
