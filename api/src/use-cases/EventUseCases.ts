/* eslint-disable no-useless-constructor */
import { Event } from '../entities/Event'
import { EventRepository } from '../repositories/events/EventRepository'

export class EventUseCase {
  constructor(private eventRepository: EventRepository) {}

  async create(data: Event) {
    const result = await this.eventRepository.add(data)
    return result
  }
}
