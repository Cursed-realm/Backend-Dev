// const http = require("http");
// const fs = require("fs");

// const myServer = http.createServer((req, res) => {
//     //   //  console.log("Request received");
//     //   //   console.log(req.headers);
//     //   // console.log(req);
//     const log = `${Date.now()}:${req.method} ${req.url} New Req received\n`;
//     fs.appendFile("/log.txt", log, (err, data) => {
//         //  switch case

//         const url = req.url;
//         const userIdMatch = url.match(/^\/user\/(\d+)$/);

//         switch (url) {
//             case "/":
//                 if (req.method === "GET") {
//                     res.end(" Home page - GET Request");
//                 }
//                 break;
//             case "/about":
//                 res.end(" About page");
//                 break;
//             case "/contact":
//                 res.end(" Contact page");
//                 break;
//             default:
//                 // Handle /user/:userid routes
//                 if (userIdMatch) {
//                     const userId = userIdMatch[1];

//                     if (req.method === "PUT") {
//                         res.end(`User ${userId} - PUT Request (Update user)`);
//                     } else if (req.method === "PATCH") {
//                         res.end(`User ${userId} - PATCH Request (Partially update user)`);
//                     } else if (req.method === "DELETE") {
//                         res.end(`User ${userId} - DELETE Request (User deleted successfully)`);
//                     } else {
//                         res.end("404 page Not Found");
//                     }
//                 } else {
//                     res.end("404 page Not Found");
//                 }
//                 break;
//         }
//         // res.end("Hello from my server Again!");
//     });
//     //   res.end("Hello from my server Again!");
// });

// myServer.listen(8000, () => console.log("Server Started"));


// // const http = require("http");
// const express = require("express");
// const app = express();
// app.get("/", (req, res) => {
//     return res.send("Home Page")
// });
// app.get("/about", (req, res) => {
//     const username = req.query.username;
//     const age = req.query.age;
//     return res.send(` Your name is ${username} Your age is ${age}`);
// });
// // const myserver = http.createServer(app);
// app.listen(8000, () => console.log("Server Started"));


// const http = require("http");
// const express = require("express");
// const application = express();
// application.get("/", (req, res) => {
//     const marks = req.query.marks;
//     if (marks > 40) {
//         return res.send("Pass");
//     } else {
//         return res.send("Fail");
//     }
// });
// application.listen(8000, () => console.log("Server Started"));


// http = require("http");
// const express = require("express");
// const application = express();
// application.get("/", (req, res) => {
//     const attendance = req.query.attendance;
//     if (attendance > 75) {
//         return res.send("Eligible for exam");
//     } else {
//         return res.send("Detained");
//     }
// });
// application.listen(8000, () => console.log("Server Started"));


http = require("http");
const express = require("express");
const application = express();
application.get("/", (req, res) => {
    return res.send("Home Page");
});
application.get("/attendance", (req, res) => {
    const name = req.query.name;
    const present = req.query.present;
    if (present === 'yes') {
        return res.send(name + " is present.")
    }
    else {
        return res.send(name + " is absent.")
    }
});
application.listen(8000, () => console.log("Server Started"));