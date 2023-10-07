import { createLogger, format, transports } from 'winston'
const { combine, timestamp, label, prettyPrint } = format
import moment from 'moment'
import DailyRotateFile from 'winston-daily-rotate-file'
import path from 'path'

export const infoLogger = createLogger({
  level: 'info',
  format: combine(
    label({ label: 'Doctor Portal' }),
    timestamp({
      format: () => moment().format('DD-MM-YYYY, h:mm:ss A'),
    }),
    prettyPrint(),
  ),
  transports: [
    new transports.Console(),
    new DailyRotateFile({
      filename: path.join(
        process.cwd(),
        'logs',
        'winston',
        'success',
        'doctor_portal-%DATE%_success.log',
      ),
      datePattern: 'DD-MM-YYYY',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d',
    }),
  ],
})

export const errorLogger = createLogger({
  level: 'error',
  format: combine(
    label({ label: 'doctor_portal' }),
    timestamp({
      format: () => moment().format('DD-MM-YYYY, h:mm:ss A'),
    }),
    prettyPrint(),
  ),
  transports: [
    new transports.Console(),
    new DailyRotateFile({
      filename: path.join(
        process.cwd(),
        'logs',
        'winston',
        'error',
        'doctor_portal_%DATE%_errors.log',
      ),
      datePattern: 'DD-MM-YYYY',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d',
    }),
  ],
})
