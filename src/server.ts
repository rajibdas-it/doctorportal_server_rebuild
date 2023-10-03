import app from './app'
import { config } from './config'

const doctorPortalServer = async () => {
  try {
    app.listen(config.port, () => {
      console.log(`server running on port`, config.port)
    })
  } catch (error) {
    console.log(error)
  }
}

doctorPortalServer()
