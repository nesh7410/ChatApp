import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const conn = () => {
    // console.log(process.env.MONGO);

    mongoose.connect(process.env.MONGO)
    .then(() => {
        console.log("Database Connection Established")
    })
    .catch((err) => {       
        console.log("Connection Issues with Database");
        console.error(err);
        process.exit(1);
    })
}

export default conn;