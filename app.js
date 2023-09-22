const express = require("express");
const cors = require ("cors");
const contactsRouter = require("./app/routes/contact.route");
app.use(cors());
const app = express();
app.use("/api/contacts", contactsRouter);
app.use(express.json());
app.get("/", (req, res) => {
    res.json({
        message: "Welcome to contact book application." });
    });
module.exports = app;
