import express from "express"
import "express-async-errors"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import testRoutes from "./routes/testRoutes.js"
import authRoute from "./routes/authRoute.js"
import cors from "cors"
import morgan from "morgan"
import errorMiddleware from "./middlewares/errorMiddleware.js"

dotenv.config()

connectDB()
const app = express()
app.use(express.json())
app.use(cors())
app.use(morgan("dev"))

app.use("/api/v1/test",testRoutes)
app.use("/api/v1/auth", authRoute)

app.use(errorMiddleware)

const PORT = process.env.PORT || 8080
const MODE = process.env.DEV_MODE || "development"

app.listen(PORT, () => {
  console.log(`Server running in ${MODE} on port ${PORT}`)  
})