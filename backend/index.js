const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const auth = require("./routes/auth");
const adminAuth = require("./routes/adminAuth");
const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");
const paymentRoutes = require('./routes/paymentRoutes'); 

dotenv.config();
connectDB(); 
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/auth", auth);
app.use("/api/admin", adminAuth);
app.use("/api/product", productRoutes);
app.use("/api/cart",cartRoutes)
app.use('/api/payment', paymentRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(` Server running on http://localhost:${PORT}`));