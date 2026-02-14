const express = require("express");
const app = express();
app.use(express.json());
let students = [
	{ id: 1, name: "Aditya", marks: 100, city: "Bolivia" },
	{ id: 2, name: "Alex", marks: 95, city: "NYC" }
];
// Post - add new student
app.post("/students", (req, res) => {
	const newStudent = req.body;

	if (!newStudent.id || !newStudent.name || !newStudent.marks || !newStudent.city) {
		return res.status(400).json({ message: "All fields required" });
	}

	students.push(newStudent);
	res.json({ message: "Student added successfully", student: newStudent });
});
// Making a server
app.listen(8000, () => console.log("Server Started"));
