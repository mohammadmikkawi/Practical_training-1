require("dotenv").config();
const { z } = require("zod");

const schema = z.object({
    PORT: z.string(),
    DB_URL: z.string().url(),
});

const env = schema.parse(process.env);

console.log("Valid ENV:", env);
