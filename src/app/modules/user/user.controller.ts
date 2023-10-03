import { NextFunction, Request, Response } from 'express'
import httpStatus from 'http-status'

const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(httpStatus.OK).json({
      statusCode: httpStatus.OK,
      message: 'user info retrived successfully',
    })
  } catch (error) {
    next(error)
  }
}

export const userController = {
  getAllUsers,
}
