require("dotenv").config();
const express = require("express")
const app = express();
const bodyParser = require("body-parser");
const middlewareHeader = require("./middlewares/header")
const middlewareBody = require("./middlewares/body")

//middleware

app.use('/', bodyParser.json(), middlewareHeader);

app.post("/", bodyParser.urlencoded({extended:true}), middlewareBody);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})