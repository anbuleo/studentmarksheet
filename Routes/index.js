import express from 'express';
import markController from '../Controllers/markController.js';
import studentController from '../Controllers/studentController.js';
import subjectController from '../Controllers/subjectController.js';



let router = express.Router()


router.post('/createmark',markController.createMark)
router.get('/getmark',markController.getMarks)
router.post('/createsubject',subjectController.createSubject)
router.get('/getsubject',subjectController.getSubjects)
router.post('/createstudent',studentController.createStudent)
router.get('/getstudent',studentController.getStudents)
router.get('/genratereportcard/:id',markController.genrateRankcard)



export default router