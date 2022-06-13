const express = require("express"); // Bring in express
const colors = require("colors");
const dotenv = require("dotenv").config(); // Bring in dotenv
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db"); 
const PORT = process.env.PORT || 5000;

// Connect to MongoDB database
connectDB()

const app = express(); // Initialize express

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.status(200).json({message: "Welcome to the Support Desk API"});
})

//Routes
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
