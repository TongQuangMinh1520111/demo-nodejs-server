
// const express = require("express");
// const cors = require('cors')
// const dbConnect = require("./db/dbConnect");
// const routes = require("./routes/routes");
// const users = require("./routes/users");
// const productRouter = require("./routes/products");

// const port = process.env.PORT || 8080;
// const app = express();
// app.use(cors());
// app.use(express.json());
// app.use(express.static('public'))
// dbConnect();
// //chan cors error
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
//   );
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET, POST, PUT, DELETE, PATCH, OPTIONS"
//   );
//   next();
// });

// app.get("/", function (req, res) {
//   res.send("home !!!");
// });

// app.get("/hello", function (req, res) {
//   res.send("hello world !!!");
// });

// app.use("/api", routes);

// app.use("/api", users);

// app.use("/api", productRouter);

// app.listen(port, (res) => {
//   console.log(`Server Started at ${port}`);
// });


const express = require('express');
const app = express();

app.get('/', function (req, res) {
   res.send('Hello World');
});
const port = process.env.PORT || 3000;
var server = app.listen(port, function () {
  console.log("Ung dung Node.js dang hoat dong tai dia chi")
});

