export default class Movie {
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
