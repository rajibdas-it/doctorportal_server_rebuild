import { Doctor } from '@prisma/client'
import prisma from '../../shared/prisma'
const createDoctor = async (data: Doctor): Promise<Doctor | undefined> => {
  const result = await prisma.doctor.create({ data })
  return result
}

const getAllDoctor = async (): Promise<Doctor[]> => {
  const result = await prisma.doctor.findMany({
    include: {
      specialization: true,
    },
  })
  return result
}

const getSingleDoctor = async (id: string): Promise<Doctor | null> => {
  const result = await prisma.doctor.findUnique({
    where: { id },
    include: {
      specialization: true,
    },
  })
  return result
}

const udpateDoctor = async (
  id: string,
  payload: Partial<Doctor>,
): Promise<Doctor> => {
  const result = await prisma.doctor.update({
    where: { id },
    data: payload,
    include: {
      specialization: true,
    },
  })
  return result
}

const deleteDoctor = async (id: string): Promise<Doctor> => {
  const result = await prisma.doctor.delete({
    where: { id },
  })
  return result
}

export const doctorService = {
  createDoctor,
  getAllDoctor,
  getSingleDoctor,
  udpateDoctor,
  deleteDoctor,
}
