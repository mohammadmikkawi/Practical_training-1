const express = require("express");
const app = express();

app.use(express.json({ limit: "100kb" }));

app.post("/", (req, res) => {
    res.json({ received: true });
});

app.listen(3000);
