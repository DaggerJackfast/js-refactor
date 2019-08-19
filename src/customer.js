import {
    NewReleaseMovie
} from './movie.js';

export default class Customer {
    constructor(name) {
        this._name = name;
        this.rentals = [];
    }
    get name() {
        return this._name;
    }
    addRental(rental) {
        this.rentals.push(rental);
    }
    getStatement() {
        let totalAmount = 0;
        let frequentRenterPoints = 0;
        let result = `Rental Record for ${this._name}\n`;
        this.rentals.forEach(rental => {
            let movieAmount = rental.movie.calculateAmount(rental.daysRented);
            frequentRenterPoints += rental.getFrequentRentalPoints();
            result += `  ${rental.movie.title}  ${movieAmount}\n`;
            totalAmount += movieAmount;
        });
        result += `Amount owed is ${totalAmount}\n`;
        result += `You earned ${frequentRenterPoints} frequent renter points\n`;
        return result;
    }
}