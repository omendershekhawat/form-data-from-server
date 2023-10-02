



import express from "express";

import studentModel from "./studentModel.js";
import { db } from "./index.js";
import multer from "multer";
import path from "path";

const studentRouter = express.Router();

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: function (req, file, callback) {
  
    const ext = path.extname(file.originalname);
    const filename = req.body.name + ext;
    callback(null, filename);
  },
})
const upload = multer({ storage: storage });

studentRouter.post(
  "/new",
  upload.single("profilePicture"),
  async (req, res) => {
 
    const { name, age, phone } = req.body;

 
    const profilePicture = req.file;

    db.collection("studentRecords")
      .insertOne({ name, age, phone, profilePicture })
      .then((result) => {
        res.status(201).send("User inserted successfully");
       
      })
      .catch((err) => {
   
        res.status(500).send("Internal Server Error");
      });

  
  }
);



export default studentRouter;