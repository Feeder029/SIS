const express = require("express");
const app = express();
const PORT = 5000;

app.use(express.json());

const productRoutes = require("./routes/product_routes");
app.use("/products", productRoutes);

app.listen(PORT, () => {
    console.log(`The server is running on http://localhost:${PORT}`);
});