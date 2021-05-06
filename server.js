require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 5000;
const cfenv = require("cfenv");
const cors = require('cors')
var db = "";

try {
    mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log("connected"));
    db = mongoose.connection;
    db.on("error", (error) => console.error(error));
    db.once("open", () => console.log("Conectando a la base de datos..."));
} catch (error) {
    console.log("could not connect");
}

const tareasRouter = require('./routes/tareas-routes');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/tareas", tareasRouter);
app.listen(port, () => console.log("escuchando"));