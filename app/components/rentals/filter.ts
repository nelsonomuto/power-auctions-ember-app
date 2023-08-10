import Component from '@glimmer/component';
import RentalModel from '../../models/rental';

interface RentalsFilterSignature {
  rentals: RentalModel[];
  query: string;
}

export default class RentalsFilterComponent extends Component<RentalsFilterSignature> {
  get results() {
    let { rentals, query } = this.args;
    if (query) {
      rentals = rentals.filter((rental) => {
        const matches = rental.title.includes(query);
        return matches;
      });
    }

    return rentals;
  }
}
