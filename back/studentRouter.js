import express from "express";
import studentModel from "./studentModel.js";


const studentRouter = express.Router();

studentRouter.get("/", async (req, res) => {
    const existingStudent = await studentModel.find({})

    res.json(existingStudent);
});
studentRouter.post("/new", async (req, res) => {
    // const newStudent = req.body;
    // const newid = students[students.length-1].id+ 1;
    // newStudent.id = newid;
    // students.push(newStudent);

    const { name, age, phone } = req.body;
    const newStudent = new studentModel({
        name: name,
        age: age,
        phone: phone,
    })

    const result = await newStudent.save()
    res.status(201).json(result);
});

// studentRouter.delete("/delete/:id", (req, res) => {
//     const idToDelete = Number (req.url.split("delete")
//     [1])
//     students = students.filter((student) => {
//         return student.id  !== idToDelete
//     })
//     res.json (students)
// })

studentRouter.delete("/delete/:id", async (req, res) => {
    const idtoDelete = req.url.split("/delete/")[1];
    await studentModel.deleteOne({ _id: idtoDelete });
})

export default studentRouter