import app from './app'
import { errorLogger, infoLogger } from './app/shared/logger'
import { config } from './config'
import { Server } from 'http'

let server: Server

const doctorPortalServer = async () => {
  try {
    server = app.listen(config.port, () => {
      infoLogger.info(`server running on port`, config.port)
    })
  } catch (error) {
    errorLogger.error('server cannot running', error)
  }

  process.on('unhandledRejection', error => {
    console.log('unhandle rejection detected. we are closing server now.')
    if (server) {
      server.close(() => {
        errorLogger.error(error)
        process.exit(1)
      })
    } else {
      process.exit(1)
    }
  })
}

doctorPortalServer()
