// import express from "express";
// const app = express();
// app.use((req, res, next) => {
//     console.log("Middleware 1");
//     next();
// });
// app.use((req, res, next) => {
//     console.log("Middleware 2");
//     next();
// });
// app.get("/test", (req, res) => {
//     res.send("Route Executed");
// });
// app.listen(8000, () => console.log("Server Started"));

// Types of Middle Ware
// Application level Middle Ware
import express from 'express';
const app = express();

// Built-in middleware
// Form data-> we use extended true
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
    console.log("Request url:", req.url);
    console.log("Request method:", req.method);
    next();
});
app.get("/home", (req, res) => {
    res.send("Welcome to home page");

});
// Root level middleware
// We will check if the login is happening or not
const checklogin = (req, res, next) => {
    const islogged = true;
    if (!islogged) {
        res.status(401).send("Please login first");
    }
    next();
};
app.get("/dashboard", checklogin, (req, res) => {
    res.send("Welcome to Dashboard");
});

// Autherization Middle Ware
const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(403).json({ message: "Token Required" });
    }
    if (token !== "akku") {
        return res.status(401).json({ message: "Invalid Token" });
    }
    next();
};
app.get("/profile", authMiddleware, (req, res) => {
    res.json({ message: "Profile Data" });
});
app.listen(8000, () => console.log("Server Started"));