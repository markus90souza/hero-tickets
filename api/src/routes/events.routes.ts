import { Router } from 'express'
import { EventRepositoryMongoose } from '../repositories/events/EventRepositoryMongoose'
import { EventUseCase } from '../use-cases/EventUseCases'
import { EventController } from '../controllers/EventController'

export class EventRoutes {
  public router: Router
  private eventController: EventController
  constructor() {
    this.router = Router()
    const eventRepository = new EventRepositoryMongoose()
    const eventUseCase = new EventUseCase(eventRepository)
    this.eventController = new EventController(eventUseCase)
    this.initRoutes()
  }

  initRoutes() {
    this.router.post(
      '/',
      this.eventController.create.bind(this.eventController),
    )
  }
}
