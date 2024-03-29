// A typical Express webservice. All JSON, all the time. Logging with Morgan.

const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const app = express();
const helmet = require("helmet");
const sequelize = require("./config/database");
const seenRoutes = require("./routes/seen");
const userRoutes = require("./routes/user");
const postsRoutes = require("./routes/post");
const path = require("path")
app.use(express.json());
app.use(bodyParser.json());

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(helmet({ crossOriginResourcePolicy: { policy: "same-site" } }));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, x-requested-with, Content, Accept, Content-Type, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    );
    next();
});

// A catch-all route for anything the webservice does not define.

(async() => {
    console.log("Testing the database connection........");
    try {
        await sequelize.authenticate();
        console.log("Succeeded: Connection has been established successfully.");
    } catch (error) {
        console.error("Failed: Unable to connect to the database:", error);
    }
})();
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use("/api/posts", postsRoutes);
app.use("/api/auth", userRoutes);
app.use("/api/seen", seenRoutes);

module.exports = app;