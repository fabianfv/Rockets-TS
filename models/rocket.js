class Booster {
    constructor(_maxPower, _powerIncrement = 10) {
        this._maxPower = _maxPower;
        this._powerIncrement = _powerIncrement;
        this._currentPower = 0;
    }
    speedUp() {
        this._currentPower += this._powerIncrement;
        if (this._currentPower > this._maxPower)
            this._currentPower = this._maxPower;
        //console.log(this._powerIncrement, this._currentPower)
    }
    slowDown() {
        this._currentPower -= this._powerIncrement;
        if (this._currentPower < 0)
            this._currentPower = 0;
        //console.log(this._powerIncrement, this._currentPower)
    }
    get powerIncrement() {
        return this._powerIncrement;
    }
    get maxPower() {
        return this._maxPower;
    }
    get currentPower() {
        return this._currentPower;
    }
}
class BoosterSystem {
    constructor(boostersMaxPower) {
        this.boosters = [];
        boostersMaxPower.forEach(maxPower => this.boosters.push(new Booster(maxPower)));
    }
    speedUp() {
        this.boosters.forEach(booster => booster.speedUp());
    }
    slowDown() {
        this.boosters.forEach(booster => booster.slowDown());
    }
    currentPower() {
        return (this.boosters.reduce((total, booster) => total + booster.currentPower, 0).toLocaleString());
    }
    maxPower() {
        return (this.boosters.reduce((total, booster) => total + booster.maxPower, 0).toLocaleString());
    }
    toString() {
        return this.boosters.map(booster => booster.maxPower).toLocaleString();
    }
}
export class Rocket {
    constructor(id, boostersMaxPower) {
        this.id = id;
        this.boosterSystem = new BoosterSystem(boostersMaxPower);
    }
    toString() {
        return `${this.id}: ${this.boosterSystem.toString()}`;
    }
    speedUp() {
        this.boosterSystem.speedUp();
    }
    slowDown() {
        this.boosterSystem.slowDown();
    }
    get idCode() {
        return this.id;
    }
    get boostersMaxPower() {
        return this.boosterSystem.toString();
    }
    get boosters() {
        return this.boosterSystem.toString();
    }
    get currentPower() {
        return this.boosterSystem.currentPower();
    }
    get maxPower() {
        return this.boosterSystem.maxPower();
    }
}
