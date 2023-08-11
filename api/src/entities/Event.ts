/* eslint-disable no-useless-constructor */
import { Location } from './Location'
import { Price } from './Price'
import { User } from './User'

export class Event {
  constructor(
    public title: string,
    public location: Location,
    public description: string,
    public date: Date,
    public banner: string,
    public coupons: string[],
    public participants: User[],
    public price: Price[],
    public city: string,
  ) {}
}
