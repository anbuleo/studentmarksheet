import mongoose from "../utils/connectDb.js";



let studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    rollNumber :{
        type:String,
        required:true,
        unique:true
    }

})

const Student = mongoose.model('student',studentSchema)

export default Student