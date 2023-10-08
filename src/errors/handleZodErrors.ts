import { ZodIssue } from 'zod'
/* eslint-disable @typescript-eslint/no-explicit-any */

const handleZodError = (error: any) => {
  const errors = error.issues.map((issue: ZodIssue) => {
    return {
      path: issue?.path[issue.path.length - 1],
      message: issue?.message,
    }
  })
  const status = 500
  return {
    statusCode: status,
    message: 'validation error',
    errorMessage: errors,
  }
}
export default handleZodError
