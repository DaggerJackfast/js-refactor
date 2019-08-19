import {NewReleaseMovie} from './movie.js';
export default class Rental {
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
    getFrequentRentalPoints() {
        let frequentRenterPoints = 1;
        // add bonus for a two day new release rental
        if (this._movie instanceof NewReleaseMovie && this._daysRented > 1) {
            frequentRenterPoints = 2;
        }
        return frequentRenterPoints;
    }
}