const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const eventRouter = require("./routes/event");

const app = express();

const mongoDB = process.env.DATABASE;

mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/event", eventRouter);

const port = 8081;

db.once("open", function () {
    console.log("Connected!");
    app.listen(port, () => {
        console.log(`Server is up and running on port number: ${port}`);
    });
});