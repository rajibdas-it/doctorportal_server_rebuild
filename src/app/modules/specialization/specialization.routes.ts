import express from 'express'
import { specializationController } from './specialization.controller'

const router = express.Router()
router.post('/create', specializationController.createSpecialization)
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
