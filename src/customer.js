import Movie from './movie.js';

export default class Customer {
    constructor(name) {
        this._name = name;
        this.rentals = [];
    }
    get name() {
        return this._name;
    }
    addRental(args) {
        this.rentals.push(args);
    }
    statement() {
        let totalAmount = 0;
        let frequentRenterPoints = 0;
        let result = `Rental Record for ${this._name}\n`;
        this.rentals.forEach(element => {
            let thisAmount = 0;
            // determine amounts for each line
            switch (element.movie.priceCode) {
                case Movie.REGULAR:
                    thisAmount += 2;
                    if (element.daysRented > 2) {
                        thisAmount += (element.daysRented - 2) * 1.5;
                    }
                    break;
                case Movie.NEW_RELEASE:
                    thisAmount += element.daysRented * 3;
                    break;
                case Movie.CHILDRENS:
                    thisAmount += 1.5;
                    if (element.daysRented > 3) {
                        thisAmount += (element.daysRented - 3) * 1.5;
                    }
                    default:
                        break;
            }
            // add frequent renter points
            frequentRenterPoints += 1;
            // add bonus for a two day new release rental
            if (element.movie.priceCode === Movie.NEW_RELEASE && element.daysRented > 1) {
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