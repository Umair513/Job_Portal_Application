import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
    try {
            const conn = await mongoose.connect(process.env.MONGO_URL)
            console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline.bold)     
    } catch (error) {
        console.log(`MongoDB error ${error.message}`.red.underline.bold)
    }
}

export default connectDB;