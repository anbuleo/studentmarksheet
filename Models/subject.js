import mongoose from '../utils/connectDb.js'


const subjectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})



let Subject = mongoose.model("subject",subjectSchema)

export default Subject