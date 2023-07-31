import mongoose from 'mongoose';

const connectDB = async()=>{
    console.log(process.env.CONNECTION_URL)
    try {
        const conn = await mongoose.connect(process.env.CONNECTION_URL);
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

export default connectDB;