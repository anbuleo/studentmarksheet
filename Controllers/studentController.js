import Student from '../Models/studemodel.js'




const createStudent =async(req,res,next)=>{
    try {
        const student = new Student(req.body)
        await student.save()
        res.status(201).json({
            message:"student created success",
            data:student
        })
    } catch (error) {
        next(error)
    }
}

const getStudents = async(req,res,next)=>{
    try {
        const students =  await Student.find()

        res.status(200).json({
            message:"Students get req success",
            data: students
        })
        
    } catch (error) {
        next(error)
    }
}




export default {
    createStudent,
    getStudents

}