require("dotenv").config();
const express = require("express");
const app = express();

app.get("/", (req, res) => {
    if (process.env.FEATURE_NEW_HOME === "true") {
        res.send("New Home Enabled");
    } else {
        res.send("Old Home");
    }
});

app.listen(3000);
