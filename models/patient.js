const mongoose=require("mongoose")
const schema=mongoose.Schema(
    {
        "name":String,
        "no":String,
        "dname":String,
        "addr":String
    }
)

let patientmodel=mongoose.model("patients",schema);
module.exports={patientmodel}
