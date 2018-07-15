import { Owner } from './owner.model';
import { Package } from './package.model';
import { Contact } from './contact.model';

export interface Card {
  dateFrom?: Date,
  contact?: Contact,
  isoDateFrom?: string,
  dateTo?: Date,
  isoDateTo?: string,
  package?: Package,
  owner?: Owner,
  hash?:string,
  promoCode?:string
}
