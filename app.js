const express = require("express")
const app = express()
const mongoose = require("mongoose")
const url = "mongodb+srv://alpha1:alpha@cluster0.jfxlt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const mySchema = require('./studentSchema');
mongoose.connect (url).then(()=>console.log("Connected to DB"));
app.use(express.json())
app.post("/add-new-post",async(req,res)=>{
    const myName = req.body.Name;
    const myRegistration = req.body.Registration;
    const myMarks = req.body.Marks;

    try{
        const newstudent = new mySchema(
            {
                Name:myName,
                Registration:myRegistration,
                Marks:myMarks
            }
        )
        const savedSchema = await newstudent.save()
        res.json(
            {"message":"Schema is saved","data":savedSchema}
        )
    }catch(err){
        res.json(err)
    }
})

app.use("/",(req,res)=>{
    res.json(
        {"message" : "Assignment in progress"}
    )
})

app.listen(3001,()=>console.log("Express server started"))