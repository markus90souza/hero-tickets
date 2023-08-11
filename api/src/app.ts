import express, { Application } from 'express'
import { connect } from './infra/database'
import { errorMiddleware } from './middlewares/error.middleware'
import { EventRoutes } from './routes/events.routes'

export class App {
  public app: Application
  private eventRoutes = new EventRoutes()

  constructor() {
    this.app = express()
    this.middlewares()
    this.routes()
    this.errorHandler()
    connect()
  }

  listen() {
    this.app.listen(3333, () => console.log('Server is running'))
  }

  middlewares() {
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
  }

  routes() {
    this.app.use('/events', this.eventRoutes.router)
  }

  errorHandler() {
    this.app.use(errorMiddleware)
  }
}
