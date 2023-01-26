require("dotenv").config();

async function dbConnect() {
  const mongoose = require("mongoose");
  mongoose.set("strictQuery", false);
  const mongoString =
    "mongodb+srv://admin:!123456@cluster-mongo-crud.eojyp7u.mongodb.net/testDatabase";
  mongoose.connect(mongoString);
  const database = mongoose.connection;

  database.on("error", (error) => {
    console.log(error);
  });

  database.once("connected", () => {
    console.log("Database Connected");
  });
}

module.exports = dbConnect;
