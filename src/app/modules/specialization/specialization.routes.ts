import express from 'express'
import { specializationController } from './specialization.controller'
import { specializationValidation } from './specialization.validation'
import validateRequest from '../../middlewares/validateRequest'

const router = express.Router()
router.post(
  '/create',
  validateRequest(specializationValidation.createSpecializationZodSchema),
  specializationController.createSpecialization,
)
router.get('/:id', specializationController.getSingleSpecialization)
router.patch(
  '/update-specialization/:id',
  specializationController.updateSpecialization,
)
router.delete(
  '/delete-specialization/:id',
  specializationController.deleteSpecialization,
)

router.get('/', specializationController.getAllSpecialization)

export const specializationRoutes = router
