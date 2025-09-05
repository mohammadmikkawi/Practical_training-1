const express = require("express");
const { z } = require("zod");
const app = express();

app.use(express.json());

const schema = z.object({
    email: z.string().email(),
    age: z.number().min(18),
});

app.post("/user", (req, res) => {
    try {
        const valid = schema.parse(req.body);
        res.json({ ok: true, user: valid });
    } catch (e) {
        res.status(400).json({ error: e.errors });
    }
});

app.listen(3000);
