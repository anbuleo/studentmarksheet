import express from 'express'
import env from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import router from './Routes/index.js';


const app = express()



env.config()

app.use(bodyParser.json())

app.use(cors())

let port = process.env.PORT

app.use('/api',router)

app.listen(port,()=>console.log(`App is listening port `,port))


app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal server Error';
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message
    })
})
