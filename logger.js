const { createLogger, format, transports } = require('winston');

const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp({}),
    format.json()
  ),
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
      )
    }),
    new transports.File({
      filename: 'logs/error.log',
      level: 'error',
      format: format.combine(
        format.timestamp(),
        format.json()
      )
    }),
    new transports.File({
      filename: 'logs/combined.log',
      format: format.combine(
        format.timestamp(),
        format.json()
      )
    })
  ]
});

module.exports = logger;