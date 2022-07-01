const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connection Successful'))
  .catch((err) => console.log(`Error in DB connection ${err}`));

module.exports = mongoose;