import mongoose from "../utils/connectDb.js";


let markSchema = new mongoose.Schema({
    marks: {
        type: Number,
        required: true
    },
    student: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Student",
        required: true
    },
    subject: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Subject",
        required: true
    }
})
markSchema.index({ student: 1, subject: 1 })
const Marks = mongoose.model("marks",markSchema)

export default Marks