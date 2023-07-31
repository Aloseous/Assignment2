import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import connectDB from "./config/db.js";
import userData from './routes/userRoutes.js'
// import UserListData from './models/userModel.js'
// import {
//     userList
// } from './data/userData.js' // used for initial Data update


const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000

connectDB()

app.use(express.json({limit:"30mb", extended:true}));
app.use(express.urlencoded({limit:"30mb", extended:true}));
app.use(cors());

app.use('/', userData)

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))

// UserListData.insertMany(userList) // used for initial Data update





