import { Owner } from './owner.model';

export class Card {

  constructor(
    // public id: number,
    public dateFrom: string,
    public dateTo: string,
    public adults: number,
    public minors: number,
    public seniors: number,
    public owner?: Owner
  ) {  }

}
