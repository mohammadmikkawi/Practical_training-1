const express = require("express");
const { createClient } = require("redis");

const app = express();
const client = createClient();

client.connect();

app.get("/posts", async (req, res) => {
    const cached = await client.get("posts");
    if (cached) return res.json({ source: "redis", data: JSON.parse(cached) });

    const data = [{ id: 1, title: "Post from DB" }];
    await client.setEx("posts", 60, JSON.stringify(data));
    res.json({ source: "db", data });
});

app.listen(3000, () => console.log("Server on 3000"));
