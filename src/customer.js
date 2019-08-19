import { NewReleaseMovie } from './movie.js';

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
    statement() {
        let totalAmount = 0;
        let frequentRenterPoints = 0;
        let result = `Rental Record for ${this._name}\n`;
        this.rentals.forEach(element => {
            let thisAmount = element.movie.calculateAmount(element.daysRented);
            // add frequent renter points
            frequentRenterPoints += 1;
            // add bonus for a two day new release rental
            if (element.movie instanceof NewReleaseMovie && element.daysRented > 1) {
                frequentRenterPoints += 1;
            }
            // show figures for this rental
            result += '  ' + element.movie.title + '  ' + thisAmount + '\n';
            totalAmount += thisAmount;
        });
        result += `Amount owed is ${totalAmount}\n`;
        result += `You earned ${frequentRenterPoints} frequent renter points\n`;
        return result;
    }
}