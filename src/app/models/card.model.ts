import { Owner } from './owner.model';

export interface Card {
  dateFrom?: Date,
  dateTo?: Date,
  price?: number,
  owner?: Owner
}
