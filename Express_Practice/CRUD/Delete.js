const express = require("express");
const app = express();
app.use(express.json());
let students = [
    { id: 10, name: "Aditya", marks: 85, city: "NYC" },
    { id: 20, name: "Alex", marks: 69, city: "LA" },
    { id: 30, name: "Andrea", marks: 70, city: "Florida" }
];
// View Students
app.get("/student", (req, res) => {
    res.json(students);
});
// Delete - remove student by id
app.delete("/student/:id", (req, res) => {
    const id = req.params.id;
    const index = students.findIndex((s) => s.id == id);

    if (index === -1) {
        return res.status(404).json({ message: "Student not found" });
    }

    const student = students[index];
    if (student.marks > 70) {
        return res.json({ message: "Student not found" });
    }

    const deletedStudent = students.splice(index, 1);
    res.json({
        message: "Student deleted succesfully",
        deletedStudent: deletedStudent[0]
    });
});
app.listen(8000, () => console.log("Server is running"))