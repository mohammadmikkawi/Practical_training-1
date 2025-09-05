const express = require("express");
const axios = require("axios");
const app = express();


const appB = express();
appB.get("/sum", (req, res) => {
    const a = +req.query.a;
    const b = +req.query.b;
    res.json({ result: a + b });
});
appB.listen(4000);


app.get("/calc", async (req, res) => {
    let retries = 3;
    while (retries--) {
        try {
            const r = await axios.get("http://localhost:4000/sum?a=2&b=3");
            return res.json(r.data);
        } catch (e) {
            if (!retries) return res.status(500).json({ error: "failed" });
        }
    }
});

app.listen(3000, () => console.log("Service A on 3000"));
