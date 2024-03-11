import express from "express"
import "express-async-errors"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import testRoutes from "./routes/testRoutes.js"
import authRoute from "./routes/authRoute.js"
import cors from "cors"
import morgan from "morgan"
import errorMiddleware from "./middlewares/errorMiddleware.js"
import userRoutes from "./routes/userRoutes.js"
import jobsRoute from "./routes/jobsRoute.js"
import helmet from "helmet"
import xss from "xss-clean"
import mongoSanitize from "express-mongo-sanitize"
import swaggerUi from "swagger-ui-express"
import swaggerJsDoc from "swagger-jsdoc"


dotenv.config()

connectDB()

const options = {
  definition:{
    openapi: "3.0.0",
  info:{
    title:"Job Portal Application",
    description:"Node Expressjs Job Portal Application"
  },
  servers:[
    {
      url:"http://localhost:8080"
    }
  ]
  },
  apis:["./routes/*.js"]
}

const spec = swaggerJsDoc(options)

const app = express()
app.use(express.json())
app.use(cors())
app.use(morgan("dev"))
app.use(helmet())
app.use(xss())
app.use(mongoSanitize())
app.use("/api/v1/test",testRoutes)
app.use("/api/v1/auth", authRoute)
app.use("/api/v1/user", userRoutes)
app.use("/api/v1/job", jobsRoute)
app.use("/api-doc",swaggerUi.serve, swaggerUi.setup(spec))

app.use(errorMiddleware)

const PORT = process.env.PORT || 8080
const MODE = process.env.DEV_MODE || "development"

app.listen(PORT, () => {
  console.log(`Server running in ${MODE} on port ${PORT}`)  
})