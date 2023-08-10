import Component from '@glimmer/component';
import RentalModel from '../../models/rental';

interface RentalsFilterSignature {
  rentals: RentalModel[];
  query: string;
}

type RentalModelKey = keyof RentalModel;

export default class RentalsFilterComponent extends Component<RentalsFilterSignature> {
  get results() {
    let { rentals, query } = this.args;
    query = query.toLowerCase();
    if (query.length > 2) {
      rentals = rentals.filter((rental) => {
        const propertiesToMatch = ['title', 'city', 'type', 'owner'];
        for (const property of propertiesToMatch) {
          const matches = (rental[property as RentalModelKey] as string)
            .toLowerCase()
            .includes(query);
          if (matches) {
            return true;
          }
        }
        return false;
      });
    }

    return rentals;
  }
}
