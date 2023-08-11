/* eslint-disable no-useless-constructor */
import { NextFunction, Request, Response } from 'express'
import { EventUseCase } from '../use-cases/EventUseCases'

export class EventController {
  constructor(private eventUseCase: EventUseCase) {}
  async create(request: Request, response: Response, next: NextFunction) {
    const data = request.body
    try {
      await this.eventUseCase.create(data)
      return response.status(201).json({
        message: 'Evento criado com sucesso',
      })
    } catch (error) {
      next(error)
    }
  }
}
