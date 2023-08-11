import express, { Application } from 'express'
import { connect } from './infra/database'
import { errorMiddleware } from './middlewares/error.middleware'

export class App {
  public app: Application

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
    // this.app.get('/', () => console.log('get'))
  }

  errorHandler() {
    this.app.use(errorMiddleware)
  }
}
