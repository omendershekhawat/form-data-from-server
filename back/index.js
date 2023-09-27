import express from 'express'
import cors from 'cors'


let students= [
    { id: 101, name: "Omender", phone: 8955673039, age:16},
    { id: 102, name: "Ajay", phone: 8955673055, age:45},
    { id: 103, name: "Vikki", phone: 8955674689, age:42},
    { id: 104, name: "Yash", phone: 8955673065, age:34},
]
const app =express()

app.use (express.json());
app.use(cors({origin: "http://localhost:5173"}))



app.get ("/",(req,res) =>{
        res.json (students);
});


app.post("/new",(req, res)=> {
    const newStudent= req.body;
    const newid = students[students.length - 1].id+1;
    newStudent.id =newid;
    students.push(newStudent);
    res.json(students);
});


app.listen(4000,()=>console.log("server is running at port 4000"))