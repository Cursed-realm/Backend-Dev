const express = require("express");
const app = express();
app.use(express.json());
let students = [
	{ id: 1, name: "Aditya", marks: 100, city: "Bolivia" },
	{ id: 2, name: "Alex", marks: 95, city: "NYC" }
];
// View Students
app.get("/students", (req, res) => {
	res.json(students);
});
// Patch update any one field (marks or city)
app.patch("/students/:id", (req, res) => {
	const id = req.params.id;
	const updates = req.body;
	const student = students.find((s) => s.id == id);
	if (!student) {
		return res.status(404).json({ message: "Student not found" });

	}
	// Apply partial updates
	Object.assign(student, updates);
	res.json({ message: "Student update succesfully", student });
})
// Making a server
app.listen(8000, () => console.log("Server Started"));