import {should} from 'chai';
import {Customer, Rental, Movie} from '../movie.js';

  //  +----------------+      +-------------+-----+      +-------+---------+
  //  | Movie          |      | Rental            |      | Customer        |
  //  +----------------+      +-------------+-----+      +-------+---------+
  //  | price_code     |<-----| days_rented       |<-----|                 |
  //  +------+---------+ 1  * +-------------+-----+ *  1 +-------+---------+
  //  |                |      |                   |      |statement        |
  //  +------+---------+      +-------------+-----+      +-------+---------+


  // movie.js
  // Represents a movie that can be rented
describe('Refactoring: Javascript Edition' ,function(){
    // TODO: change to given
    let rubocop, venom, up, ropocop_rental, venom_rental , up_rental;
    beforeEach(function(){
        rubocop = new Movie('Robocop', Movie.REGULAR);
        venom = new Movie('Venom', Movie.NEW_RELEASE);
        up = new Movie('Up!', Movie.CHILDRENS);

        ropocop_rental = new Rental(robocop, 3);
        venom_rental = new Rental(venom, 3);
        up_rental = new Rental(up_rental, 3);
    })
    describe('Customer', function () {
        
    })
})