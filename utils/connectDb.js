import mongoose from "mongoose";
import env from 'dotenv'


env.config()

let uri = process.env.DB_URL
let name = process.env.DB_NAME

try {
    mongoose.connect(`${uri}/${name}`)
    mongoose.set('strictPopulate', false);
    console.log('DB connected success')
    
} catch (error) {
    console.log(error)
}


export default mongoose