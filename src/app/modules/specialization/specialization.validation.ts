import { z } from 'zod'

const createSpecializationZodSchema = z.object({
  body: z.object({
    name: z.string({ required_error: 'specialization name is required' }),
    descriptons: z.string().optional(),
  }),
})

export const specializationValidation = {
  createSpecializationZodSchema,
}
