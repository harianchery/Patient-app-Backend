const mongoose=require("mongoose")
const cors=require("cors")
const express=require("express")
const { patientmodel } = require("./models/vehicle")


const app=express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://hari:hari001@cluster0.ocavfn3.mongodb.net/patientdb?retryWrites=true&w=majority&appName=Cluster0")

app.post("/add",(req,res)=>{
    let input=req.body
    // console.log(input)
    let patient=new patientmodel(input)
    patient.save()
    res.json({"status":"success"})
})

app.get("/view",(req,res)=>{
    patientmodel.find().then(
        (data)=>{
            res.json(data)
        }
    ).catch((error)=>{
        res.json(error)
    })
})

app.post("/search",(req,res)=>{
    let input=req.body
    patientmodel.find(input).then(
        (data)=>{
            res.json(data)
        }
    ).catch((error)=>{
        res.json(error)
    })
})

app.post("/delete",(req,res)=>{
    let input=req.body
    patientmodel.findByIdAndDelete(input._id).then(
        (response)=>{
            res.json({"status":"success"})
        }
    ).catch((response)=>{
        res.json({"status":"error"})
    })
})



app.listen(8081,()=>{
    console.log("server started")
})