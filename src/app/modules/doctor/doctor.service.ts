/* eslint-disable @typescript-eslint/no-explicit-any */
import { Doctor } from '@prisma/client'
import prisma from '../../shared/prisma'
const createDoctor = async (data: Doctor): Promise<Doctor | undefined> => {
  const result = await prisma.doctor.create({ data })
  return result
}

const getAllDoctor = async (
  page: number,
  limit: number,
  sortBy: string,
  sortOrder: string,
  searchTerm: string,
): Promise<Doctor[] | any> => {
  const result = await prisma.doctor.findMany({
    where: {
      OR: [
        {
          fullName: {
            contains: searchTerm,
            mode: 'insensitive',
          },
        },
        {
          specialization: {
            name: {
              contains: searchTerm,
              mode: 'insensitive',
            },
          },
        },
        {
          specialization: {
            descriptons: {
              contains: searchTerm,
              mode: 'insensitive',
            },
          },
        },
      ],
    },
    include: {
      specialization: true,
    },
    orderBy: {
      [sortBy]: sortOrder,
    },
    take: limit,
    skip: (page - 1) * limit,
  })

  const total = await prisma.doctor.count()
  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  }
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
