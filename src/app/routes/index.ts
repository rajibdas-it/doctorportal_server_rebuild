import express from 'express'
import { userRoutes } from '../modules/user/user.routes'
import { specializationRoutes } from '../modules/specialization/specialization.routes'
import { doctorRoutes } from '../modules/doctor/doctor.routes'

const router = express.Router()

const routes = [
  {
    pathName: '/user',
    routeName: userRoutes,
  },
  {
    pathName: '/specialization',
    routeName: specializationRoutes,
  },
  {
    pathName: '/doctor',
    routeName: doctorRoutes,
  },
]

routes.map(route => {
  router.use(route.pathName, route.routeName)
})

export default router
