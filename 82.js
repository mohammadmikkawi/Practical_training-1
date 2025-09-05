const { Queue, Worker } = require("bullmq");
const connection = { connection: { host: "127.0.0.1", port: 6379 } };

const emailQueue = new Queue("email", connection);

// Producer
(async () => {
    await emailQueue.add("send", { to: "test@example.com" });
})();

// Consumer
new Worker(
    "email",
    async job => {
        console.log("Sending email to:", job.data.to);
    },
    { concurrency: 5, ...connection }
);
