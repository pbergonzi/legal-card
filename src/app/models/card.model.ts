import { Owner } from './owner.model';

export interface Card {
  dateFrom: Date,
  dateTo?: Date,
  adults?: number,
  minors?: number,
  seniors?: number,
  owner?: Owner
}