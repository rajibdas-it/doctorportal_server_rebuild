import { RequestHandler } from 'express'
import httpStatus from 'http-status'
import { doctorService } from './doctor.service'

const createDoctor: RequestHandler = async (req, res) => {
  try {
    const data = req.body
    const result = await doctorService.createDoctor(data)
    res.status(httpStatus.OK).json({
      statusCode: httpStatus.OK,
      message: 'Doctor created successfully',
      data: result,
    })
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      statusCode: httpStatus.BAD_REQUEST,
      message: 'something went wrong',
    })
  }
}

const getAllDoctor: RequestHandler = async (req, res) => {
  try {
    const result = await doctorService.getAllDoctor()
    res.status(httpStatus.OK).json({
      statusCode: httpStatus.OK,
      message: 'Doctors retrived successfully',
      data: result,
    })
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      statusCode: httpStatus.BAD_REQUEST,
      message: 'something went wrong',
    })
  }
}

const getSingleDoctor: RequestHandler = async (req, res) => {
  try {
    const id = req.params.id
    const result = await doctorService.getSingleDoctor(id)
    res.status(httpStatus.OK).json({
      statusCode: httpStatus.OK,
      message: 'Doctor info retrived successfully',
      data: result,
    })
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      statusCode: httpStatus.BAD_REQUEST,
      message: 'something went wrong',
    })
  }
}
const udpateDoctor: RequestHandler = async (req, res) => {
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
    res.status(httpStatus.BAD_REQUEST).json({
      statusCode: httpStatus.BAD_REQUEST,
      message: 'something went wrong',
    })
  }
}

const deleteDoctor: RequestHandler = async (req, res) => {
  try {
    const id = req.params.id
    const result = await doctorService.deleteDoctor(id)
    res.status(httpStatus.OK).json({
      statusCode: httpStatus.OK,
      message: 'Doctor info retrived successfully',
      data: result,
    })
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      statusCode: httpStatus.BAD_REQUEST,
      message: 'something went wrong',
    })
  }
}
export const doctorController = {
  createDoctor,
  getAllDoctor,
  getSingleDoctor,
  udpateDoctor,
  deleteDoctor,
}
