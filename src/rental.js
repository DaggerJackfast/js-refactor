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
}