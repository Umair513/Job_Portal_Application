import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js"

dotenv.config()

connectDB()
const app = express()

app.get("/", (req, res) => {
    res.send("<h1>Welcome to Job Portal</h1>")
})

const PORT = process.env.PORT || 8080
const MODE = process.env.DEV_MODE || "development"

app.listen(PORT, () => {
  console.log(`Server running in ${MODE} on port ${PORT}`)  
})