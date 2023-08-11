import mongoose from 'mongoose'
import { EventRepository } from './EventRepository'
import { Event } from '../../entities/Event'

const Schema = new mongoose.Schema({
  title: String,
  location: {
    latitude: String,
    longitude: String,
  },
  date: Date,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  description: String,
  banner: String,
  flyers: [String],
  categories: [String],
  price: {
    type: Array,
  },
  city: String,
  participants: {
    type: Array,
    ref: 'User',
  },
})

const EventModel = mongoose.model('Event', Schema)

export class EventRepositoryMongoose implements EventRepository {
  async add(event: Event): Promise<Event> {
    const eventModel = new EventModel(event)

    await eventModel.save()

    return event
  }
}
