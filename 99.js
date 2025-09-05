const express = require("express");
const { createClient } = require("redis");

const client = createClient();
client.connect();

const app = express();

async function rateLimiter(req, res, next) {
    const ip = req.ip;
    const key = `rate:${ip}`;
    const tokens = await client.get(key);

    if (!tokens) {
        await client.setEx(key, 10, 9); // burst 10, consume 1
        return next();
    }

    if (tokens > 0) {
        await client.decr(key);
        return next();
    }

    res.status(429).send("Too many requests");
}

app.get("/", rateLimiter, (req, res) => {
    res.send("ok");
});

app.listen(3000);
