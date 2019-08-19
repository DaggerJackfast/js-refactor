class Movie {
    constructor(title) {
        this._title = title;
    }
    get title() {
        return this._title;
    }
}

export class RegularMovie extends Movie {
    calculateAmount(days) {
        let amount = 2;
        if (days > 2) {
            amount += (days - 2) * 1.5;
        }
        return amount;
    }
}

export class NewReleaseMovie extends Movie {
    calculateAmount(days) {
        return days * 3;
    }
}

export class ChildrensMovie extends Movie {
    calculateAmount(days) {
        let amount = 1.5;
        if (days > 3) {
            amount += (days - 3) * 1.5;
        }
        return amount;
    }
}