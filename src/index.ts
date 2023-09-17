import app from './app'
import config from './config'
import { logger } from './middleware'

const server = app.listen(config.port, () => {
  logger.log('info', `Server is running on Port: ${config.port}`)
  if (config.node_env === 'production') console.log('Server Started')
})

process.on('SIGTERM', () => {
  logger.info('SIGTERM signal received.')
  logger.info('Closing http server.')
  server.close(err => {
    logger.info('Http server closed.')
    process.exit(err !== undefined ? 1 : 0)
  })
})
