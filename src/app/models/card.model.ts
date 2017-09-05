import { Owner } from './owner.model';
import { Package } from './package.model';

export interface Card {
  dateFrom?: Date,
  isoDateFrom?: string,
  dateTo?: Date,
  isoDateTo?: string,
  package?: Package,
  owner?: Owner
}
