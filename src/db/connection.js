const mongoose = require("mongoose");
require("dotenv").config();

// Retrieve the MongoDB connection URI from the environment variables
const mongoURI = process.env.MONGO_URI;

// Establish a connection to the database
// mongoose.connect(mongoURI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// Establish a connection to the database (if not already connected)
if (!mongoose.connections.length) {
  mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

// Get the default connection
const db = mongoose.connection;

// Event listeners for the connection events
db.on("connected", () => {
  console.log("Connected to MongoDB");
});

db.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});

module.exports = mongoose; // Export the mongoose object