// import express from 'express';
// import { userData } from "./data.js";

// const app = express();
// const port = 3000;

// app.use(express.json())

// app.get("/", (req, res) => {
// 	res.send("Home Page")
// })

// app.get("/user", (req, res) => {
// 	res.json(userData)
// })

// app.get("/user/:id", (req, res) => {
// 	const id = req.params.id;
// 	const user = userData.find((ele) => ele.id == id);
// 	if (!user) {
// 		return res.json({
// 			message: "User not found"
// 		})
// 	}
// 	return res.json(user)
// })

// app.get("/search", (req, res) => {
// 	const username = req.query.name;
// 	const password = req.query.password;
// 	res.send({
// 		username, password
// 	})
// })

// app.post("/user", (req, res) => {
// 	let { name, city } = req.body;
// 	let newuserData = {
// 		id: userData.length + 1,
// 		name: name,
// 		city: city
// 	}
// 	userData.push(newuserData)
// 	console.log(req.body)

// 	res.status(200).json({
// 		message: "user created",
// 		newuserData,
// 		userData
// 	})

// })

// app.listen(port, () => {
// 	console.log("Server is running")
// })


//server.js
import express from "express"
import { userData } from "./data.js";
import { mid1, validationPost } from "./middleware.js";


const app = express();
const port = 3000;


app.use(express.json())
app.use(mid1)

//req -> middleware -> res

// http://localhost:3000
app.get("/", (req, res) => {
	res.send("home route")
})

// http://localhost:3000/user
app.get("/user", (req, res) => {

	return res.json(userData)
})
//http://localhost:3000/user/2
app.get("/user/:id", (req, res) => {
	const id = parseInt(req.params.id);

	const user = userData.find((ele) => ele.id === id);

	if (!user) {
		return res.json({
			message: "user not found"
		})
	}

	return res.json(user)
})
//http://localhost:3000/search?name=raj&password="qwert&quot;
app.get("/search", (req, res) => {
	console.log(req.query)

	const userName = req.query.name;
	const userPassword = req.query.password
	res.send({
		userName, userPassword
	})
})

//http://localhost:3000/user --post
app.post("/user", validationPost, (req, res) => {

	let { name, city } = req.body;


	let newUserdata = {
		id: userData.length + 1,
		name: name,
		city: city
	}
	userData.push(newUserdata)
	res.status(200).json({
		message: "User Created"
	})

})


app.listen(port, () => {
	console.log("server is running")
})