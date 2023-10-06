import { RequestHandler } from 'express'
import httpStatus from 'http-status'
import { doctorService } from './doctor.service'
import catchAsync from '../../shared/catchAsync'

const createDoctor: RequestHandler = async (req, res, next) => {
  try {
    const data = req.body
    const result = await doctorService.createDoctor(data)
    res.status(httpStatus.OK).json({
      statusCode: httpStatus.OK,
      message: 'Doctor created successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const getAllDoctor = catchAsync(async (req, res) => {
  const {
    page = 1,
    limit = 10,
    sortBy = 'createdAt',
    sortOrder = 'asc',
    searchTerm,
  } = req.query
  // console.log(req.query)

  const result = await doctorService.getAllDoctor(
    Number(page),
    Number(limit),
    String(sortBy),
    String(sortOrder),
    String(searchTerm),
  )
  res.status(httpStatus.OK).json({
    statusCode: httpStatus.OK,
    message: 'Doctors retrived successfully',
    meta: result.meta,
    data: result.data,
  })
})

const getSingleDoctor: RequestHandler = async (req, res, next) => {
  try {
    const id = req.params.id
    const result = await doctorService.getSingleDoctor(id)
    res.status(httpStatus.OK).json({
      statusCode: httpStatus.OK,
      message: 'Doctor info retrived successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}
const udpateDoctor: RequestHandler = async (req, res, next) => {
  try {
    const id = req.params.id
    const data = req.body
    const result = await doctorService.udpateDoctor(id, data)
    res.status(httpStatus.OK).json({
      statusCode: httpStatus.OK,
      message: 'Doctor info retrived successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const deleteDoctor: RequestHandler = async (req, res, next) => {
  try {
    const id = req.params.id
    const result = await doctorService.deleteDoctor(id)
    res.status(httpStatus.OK).json({
      statusCode: httpStatus.OK,
      message: 'Doctor info retrived successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}
export const doctorController = {
  createDoctor,
  getAllDoctor,
  getSingleDoctor,
  udpateDoctor,
  deleteDoctor,
}
