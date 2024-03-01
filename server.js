import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import testRoutes from "./routes/testRoutes.js"
import cors from "cors"
import morgan from "morgan"

dotenv.config()

connectDB()
const app = express()
app.use(express.json())
app.use(cors())
app.use(morgan("dev"))

app.use("/api/v1/test",testRoutes)

const PORT = process.env.PORT || 8080
const MODE = process.env.DEV_MODE || "development"

app.listen(PORT, () => {
  console.log(`Server running in ${MODE} on port ${PORT}`)  
})