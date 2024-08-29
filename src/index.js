const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { LoggerConfig, ServerConfig } = require("./config");
const apiRoutes = require("./routes");

// Creating new express app instance
const app = express();
const PORT = ServerConfig.PORT;

// Middleware to parse incoming request to json
app.use(express.json());

// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: true }));

// Middleware to parse cookies
app.use(cookieParser());

// Logger Middleware
app.use(LoggerConfig.logger);

// CORS Middleare to all origin requests
app.use(
    cors({
        allowHeaders: true,
        credentials: true,
        origin: "*",
        methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    })
);

// Routes for the API
app.use("/api", apiRoutes);

// Starting the server
app.listen(PORT, () => {
    console.log(`Server is Up and Running at PORT:- ${PORT}`);
});
