import { RequestHandler } from 'express'
import httpStatus from 'http-status'
import { specializationService } from './specialization.service'

const createSpecialization: RequestHandler = async (req, res) => {
  try {
    const data = req.body
    const result = await specializationService.createSpecialization(data)
    res.status(httpStatus.OK).json({
      statusCode: httpStatus.OK,
      message: 'specialization created successfully',
      data: result,
    })
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      statusCode: httpStatus.BAD_REQUEST,
      message: 'something went wrong',
    })
  }
}

const getAllSpecialization: RequestHandler = async (req, res) => {
  try {
    const result = await specializationService.getAllSpecialization()
    res.status(httpStatus.OK).json({
      statusCode: httpStatus.OK,
      message: 'specializations retrived successfully',
      data: result,
    })
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      statusCode: httpStatus.BAD_REQUEST,
      message: 'something went wrong',
    })
  }
}

const getSingleSpecialization: RequestHandler = async (req, res) => {
  try {
    const id = req.params.id
    const result = await specializationService.getSingleSpecialization(id)

    res.status(httpStatus.OK).json({
      statusCode: httpStatus.OK,
      message: 'specialization retrived successfully',
      data: result,
    })
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      statusCode: httpStatus.BAD_REQUEST,
      message: 'something went wrong',
    })
  }
}

export const specializationController = {
  createSpecialization,
  getAllSpecialization,
  getSingleSpecialization,
}
