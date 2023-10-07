import app from './app'
import { errorLogger, infoLogger } from './app/shared/logger'
import { config } from './config'

const doctorPortalServer = async () => {
  try {
    app.listen(config.port, () => {
      infoLogger.info(`server running on port`, config.port)
    })
  } catch (error) {
    errorLogger.error('server cannot running', error)
  }
}

doctorPortalServer()
