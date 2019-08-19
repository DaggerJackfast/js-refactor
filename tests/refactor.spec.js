import {
    expect
} from 'chai';
import {
    NewReleaseMovie,
    RegularMovie,
    ChildrensMovie
} from '../src/movie.js';
import Customer from '../src/customer.js';
import Rental from '../src/rental.js';


describe('Refactoring: Javascript Edition', function () {
    // TODO: change to given
    let rubocop, venom, up, rubocopRental, venomRental, upRental;
    let customer;
    beforeEach(function () {
        rubocop = new RegularMovie('Robocop');
        venom = new NewReleaseMovie('Venom');
        up = new ChildrensMovie('Up!');

        rubocopRental = new Rental(rubocop, 3);
        venomRental = new Rental(venom, 3);
        upRental = new Rental(up, 3);

        // TODO: what is subject in rspec
        customer = new Customer('Bob');
    })
    describe('Customer', function () {
        context('without rentals', function () {
            it('prints a statement', function () {
                expect(customer.getStatement()).to.equal(
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
                expect(customer.getStatement()).to.equal(
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