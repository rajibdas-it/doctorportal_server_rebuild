/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import express, { Application, NextFunction, Request, Response } from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import httpStatus from 'http-status'
import dpRoutes from './app/routes'
import globalErrorHandler from './app/middlewares/globalErrorHandler'

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
app.use('/api/v1/', dpRoutes)

//cheking route
// app.get('/', (req: Request, res: Response, next: NextFunction) => {
//   try {
//     res.status(httpStatus.OK).json({
//       statusCode: httpStatus.OK,
//       message: 'server is running',
//     })
//   } catch (error) {
//     next(error)
//   }
// })

//Unhandle Rejection checking
// app.get('/', (req: Request, res: Response, next: NextFunction) => {
//   Promise.reject(new Error('unhandle rejection'))
// })

// uncaught rejection checking
// app.get('/', (req: Request, res: Response, next: NextFunction) => {
//   console.log(x)
// })

app.use(globalErrorHandler)

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    statusCode: httpStatus.NOT_FOUND,
    message: 'url not found',
    errorMessages: {
      path: req.originalUrl,
      message: 'Not Found',
    },
  })
})

export default app
