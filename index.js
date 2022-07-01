const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/todoRoute");

const app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/", routes);  

const port = process.env.Port || 3000;
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  