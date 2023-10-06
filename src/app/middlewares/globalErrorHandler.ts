import { ErrorRequestHandler } from 'express'
import httpStatus from 'http-status'

const globalErrorHandler: ErrorRequestHandler = async (error, req, res) => {
  res.status(httpStatus.NOT_FOUND).json({
    status: httpStatus.NOT_FOUND,
    success: false,
    message: 'Something went wrong!',
    error: [
      {
        path: '',
        message: error.message,
      },
    ],
  })
}

export default globalErrorHandler
