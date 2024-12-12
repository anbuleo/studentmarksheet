import Marks from "../Models/mark.js";
import Student from "../Models/studemodel.js";



const createMark = async(req,res,next)=>{
    try {
        const marks = new Marks(req.body);
        await marks.save();
        res.status(201).json({ message: "Marks created successfully", data: marks });
    } catch (error) {
        next(error)
    }
}

const getMarks = async(req,res,next)=>{
    try {
        const marks = await Marks.find().populate("student", "name").populate("subject", "name").exec();
        res.status(200).json({ message: "Marks fetched successfully", data: marks });
    } catch (error) {
        next(error)
    }
}

const genrateRankcard = async(req,res,next)=>{
    try {
        const studentId = req.params.id
      

        const student = await Student.findById(studentId)
        // console.log(studentId,student)

        if(!student) return next({message:"user not found",statusCode:400})
        
            const marks = await Marks.find({ student: studentId }).populate("subjects", "name").exec();
            if(!marks.length){
                return res.status(404).json({ message: "Marks not found" });
            }
            console.log(marks)
            const totalMarks = marks.reduce((acc, mark) => acc + mark.marks, 0);
        const pass = marks.every((mark) => mark.marks >= 50);  
        res.status(200).json({
            message: "Report card generated successfully",
            student:{
                id: student._id,
                name: student.name,
                rollNumber: student.rollNumber,
            },
            subjects: marks.map((mark) => ({
                
                subject: mark.subject.name,
                marks: mark.marks,
            })),
            totalMarks,
            status: pass ? "Pass" : "Fail",
           
        })
        
    } catch (error) {
        next(error)
    }
}

export default {
    createMark,
    getMarks,
    genrateRankcard
}