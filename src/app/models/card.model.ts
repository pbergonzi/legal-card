import { Owner } from './owner.model';

export interface Card {
  dateFrom: string,
  dateTo: string,
  adults: number,
  minors: number,
  seniors: number,
  owner?: Owner
}
