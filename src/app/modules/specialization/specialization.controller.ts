import { RequestHandler } from 'express'
import httpStatus from 'http-status'
import { specializationService } from './specialization.service'

const createSpecialization: RequestHandler = async (req, res, next) => {
  try {
    const data = req.body
    const result = await specializationService.createSpecialization(data)
    res.status(httpStatus.OK).json({
      statusCode: httpStatus.OK,
      message: 'specialization created successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const getAllSpecialization: RequestHandler = async (req, res, next) => {
  try {
    const result = await specializationService.getAllSpecialization()
    res.status(httpStatus.OK).json({
      statusCode: httpStatus.OK,
      message: 'specializations retrived successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const getSingleSpecialization: RequestHandler = async (req, res, next) => {
  try {
    const id = req.params.id
    const result = await specializationService.getSingleSpecialization(id)

    res.status(httpStatus.OK).json({
      statusCode: httpStatus.OK,
      message: 'specialization retrived successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const updateSpecialization: RequestHandler = async (req, res, next) => {
  try {
    const id = req.params.id
    const data = req.body
    const result = await specializationService.updateSpecialization(id, data)

    res.status(httpStatus.OK).json({
      statusCode: httpStatus.OK,
      message: 'specialization retrived successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const deleteSpecialization: RequestHandler = async (req, res, next) => {
  try {
    const id = req.params.id
    const result = await specializationService.deleteSpecialization(id)
    res.status(httpStatus.OK).json({
      statusCode: httpStatus.OK,
      message: 'specialization deleted successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

export const specializationController = {
  createSpecialization,
  getAllSpecialization,
  getSingleSpecialization,
  updateSpecialization,
  deleteSpecialization,
}
