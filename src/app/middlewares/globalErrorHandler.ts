/* eslint-disable no-undefined */
/* eslint-disable no-unused-expressions */
/* eslint-disable prefer-const */
import { ErrorRequestHandler } from 'express'

import ApiError from '../../errors/apiErrors'
import { config } from '../../config'
import { errorLogger } from '../shared/logger'
import { ZodError } from 'zod'
import handleZodError from '../../errors/handleZodErrors'
import { IGenericErrorMessage } from '../../interface/error'

const globalErrorHandler: ErrorRequestHandler = (error, req, res, next) => {
  config.node_env === 'development'
    ? console.log('Global Error Handler:', error)
    : errorLogger.error('Global Error Handler:', error)
  let statusCode = 500
  let message = 'something went wrong'
  let errorMessages: IGenericErrorMessage[] = []

  if (error instanceof Error) {
    message = error?.message
    errorMessages = error?.message
      ? [{ path: '', message: error?.message }]
      : []
  } else if (error instanceof ApiError) {
    statusCode = error?.statusCode
    message = error?.message
    errorMessages = error?.message
      ? [{ path: '', message: error?.message }]
      : []
  } else if (error instanceof ZodError) {
    const simplifiedError = handleZodError(error)
    statusCode = simplifiedError.statusCode
    message = simplifiedError.message
    errorMessages = simplifiedError.errorMessages
  }

  res.status(statusCode).json({
    success: false,
    message,
    errorMessages,
    stack: config.node_env != 'production' ? error?.stack : undefined,
  })

  next()
}

export default globalErrorHandler
