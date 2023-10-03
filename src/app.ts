import express, { Application, NextFunction, Request, Response } from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import httpStatus from 'http-status'

const app: Application = express()

const corsOptions = {
  origin: true,
  credential: true,
}
app.use('*', cors(corsOptions))
app.use(cookieParser())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//app routes

//cheking route
app.get('/', (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(httpStatus.OK).json({
      statusCode: httpStatus.OK,
      message: 'server is running',
    })
  } catch (error) {
    next(error)
  }
})

export default app
