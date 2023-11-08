const express = require('express');
const Student=require("./models/StudentModel");
const StudentModel=require("./models/StudentModel");
const app = express();
const PORT = 5000;
const cors= require('cors');
app.use(express.json());
app.use(cors());
require('./db')

app.get("/",(req,res)=>{
res.send("Hello World!....");
});

 app.get("/students",(req,res)=>{
  res.send("Hello From Students");
});
app.get("/Student",async(req,res)=>{
    try{
        const studentlist=await Student.find();
        res.send(studentlist);
    }
    catch(error){
        console.log(error);
       } 
       });

app.post("/Student",async(req,res)=>{
    try{
        const data=req.body;
        const createdstudent = new Student(data);
        await createdstudent.save();
        res.send("Student Created");
    }
    catch(error){
    console.log(error);
   } 
   });
   app.post("/Student",async(req,res)=>{
    try{
        const data=req.body;
        const createdstudent = new Student(data);
        await createdstudent.save();
        res.send("Student Created");
    }
    catch(error){
    console.log(error);
   } 
   });
   app.put("/Student/:id",async(req,res)=>{
    try{
        const StudentId=req.params.id;
        await Student.updateOne({id:StudentId},{$set:req.body});
        res.send("Student updated");
    }
    catch(error){
    console.log(error);
   } 
   });
   app.delete("/Student/:id",async(req,res)=>{
    try{
        await Student.deleteOne({id:req.params.id});
        res.send("Student deleted");
    }
    catch(error){
    console.log(error);
   } 
   });
app.get("/faculty",(req,res)=>{
res.send("Hello From Faculty");
});
//create a resource
//app.post()

app.listen(PORT,function(){;
console.log(`server is running on localhost:${PORT}`);
});