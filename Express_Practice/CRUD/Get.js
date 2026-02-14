const express = require("express");
const app = express();
app.use(express.json());
let students = [
	{ id: 1, name: "Aditya", marks: 100, city: "Bolivia" },
	{ id: 2, name: "Alex", marks: 95, city: "NYC" }
];
// Get - retrieve student by id
app.get("/students/:id", (req, res) => {
	const id = req.params.id;
	const student = students.find((s) => s.id == id);

	if (!student) {
		return res.status(404).json({ message: "Student not found" });
	}

	res.json({ message: "Student found", student });
});
// Making a server
app.listen(8000, () => console.log("Server Started"));
