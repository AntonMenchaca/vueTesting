const mongoose = require("mongoose");
const url = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PW}@cluster0.ajay8.mongodb.net/test`;
mongoose.Promise = Promise;

mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .catch((error) => console.error(error));

const db = mongoose.connection;
module.exports = db;
