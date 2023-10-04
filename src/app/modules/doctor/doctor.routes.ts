import express from 'express'
import { doctorController } from './doctor.controller'
const router = express.Router()

router.post('/create-doctor', doctorController.createDoctor)
router.get('/:id', doctorController.getSingleDoctor)
router.patch('/update-doctor/:id', doctorController.udpateDoctor)
router.delete('/delete-doctor/:id', doctorController.deleteDoctor)

router.get('/', doctorController.getAllDoctor)
export const doctorRoutes = router
