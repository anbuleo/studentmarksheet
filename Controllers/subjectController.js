import Subject from "../Models/subject.js";



const createSubject = async(req,res,next)=>{
    try {
        const subject = new Subject(req.body);
        await subject.save();
        res.status(201).json({ message: "Subject created successfully", data: subject });
    } catch (error) {
        next(error)
    }
}

const getSubjects = async(req,res,next)=>{
    try {
        const subjects = await Subject.find()
        res.status(200).json({
            message:'Subject get success',
            data:subjects
        })
    } catch (error) {
        next(error)
    }
}

export default {
    createSubject,
    getSubjects
}