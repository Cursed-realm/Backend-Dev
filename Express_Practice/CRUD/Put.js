const express = require("express");
const app = express();
app.use(express.json());
let students = [
    { id: 1, name: "Aditya", marks: 100, city: "Bolivia" },
    { id: 2, name: "Alex", marks: 95, city: "NYC" }
];
// Put - update entire student (all fields)
app.put("/students/:id", (req, res) => {
    const id = req.params.id;
    const updates = req.body;
    const student = students.find((s) => s.id == id);

    if (!student) {
        return res.status(404).json({ message: "Student not found" });
    }

    // Replace entire student object
    Object.assign(student, updates);
    res.json({ message: "Student updated successfully", student });
});
// Making a server
app.listen(8000, () => console.log("Server Started"));
