import {
    expect
} from 'chai';
// import Movie from '../src/movie.js';
// import Customer from '../src/customer.js';
// import Rental from '../src/rental.js';

//  +----------------+      +-------------+-----+      +-------+---------+
//  | Movie          |      | Rental            |      | Customer        |
//  +----------------+      +-------------+-----+      +-------+---------+
//  | price_code     |<-----| days_rented       |<-----|                 |
//  +------+---------+ 1  * +-------------+-----+ *  1 +-------+---------+
//  |                |      |                   |      |statement        |
//  +------+---------+      +-------------+-----+      +-------+---------+


// movie.js
// Represents a movie that can be rented
class Movie {
    constructor(title, priceCode) {
        this._title = title;
        this.priceCode = priceCode;
    }
    get title() {
        return this._title;
    }
    static get REGULAR() {
        return 0;
    }
    static get NEW_RELEASE() {
        return 1;
    }
    static get CHILDRENS() {
        return 2;
    }
}
// rental.js
// Represents a customer renting a movie.
class Rental {
    constructor(movie, daysRented) {
        this._movie = movie;
        this._daysRented = daysRented;
    }
    get movie() {
        return this._movie;
    }
    get daysRented() {
        return this._daysRented;
    }
}
// customer.js 
// Represents the customer of the store.
class Customer {
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

describe('Refactoring: Javascript Edition', function () {
    // TODO: change to given
    let rubocop, venom, up, rubocopRental, venomRental, upRental;
    let customer;
    beforeEach(function () {
        rubocop = new Movie('Robocop', Movie.REGULAR);
        venom = new Movie('Venom', Movie.NEW_RELEASE);
        up = new Movie('Up!', Movie.CHILDRENS);

        rubocopRental = new Rental(rubocop, 3);
        venomRental = new Rental(venom, 3);
        upRental = new Rental(up, 3);

        // TODO: what is subject in rspec
        customer = new Customer('Bob');
    })
    describe('Customer', function () {
        context('without rentals', function () {
            it('prints a statement', function () {
                expect(customer.statement()).to.equal(
                    `Rental Record for Bob
Amount owed is 0
You earned 0 frequent renter points
`);
            });
        });
        context('with rentals', function () {
            beforeEach(function () {
                customer.addRental(rubocopRental);
                customer.addRental(venomRental);
                customer.addRental(upRental);
            });
            it('prints a statement', function () {
                expect(customer.statement()).to.equal(
                    `Rental Record for Bob
  Robocop  3.5
  Venom  9
  Up!  1.5
Amount owed is 14
You earned 4 frequent renter points
`);
            });
        });
    });
});
