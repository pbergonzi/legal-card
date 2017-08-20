import { Owner } from './owner.model';

export interface Card {
  dateFrom?: Date,
  isoDateFrom?: string,
  dateTo?: Date,
  isoDateTo?: string,
  price?: number,
  owner?: Owner
}
