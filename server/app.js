const express = require("express");
const app = express();
const PORT = 5000;

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "This is a test"
    });
});

app.listen(PORT, () => {
    console.log(`The server is running on http://localhost:${PORT}`);
});