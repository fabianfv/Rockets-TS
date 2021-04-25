"use strict";
var Booster = /** @class */ (function () {
    function Booster(_maxPower, _powerIncrement) {
        if (_powerIncrement === void 0) { _powerIncrement = 10; }
        this._maxPower = _maxPower;
        this._powerIncrement = _powerIncrement;
        this._currentPower = 0;
    }
    Booster.prototype.speedUp = function () {
        this._currentPower += this._powerIncrement;
        if (this._currentPower > this._maxPower)
            this._currentPower = this._maxPower;
        //console.log(this._powerIncrement, this._currentPower)
    };
    Booster.prototype.slowDown = function () {
        this._currentPower -= this._powerIncrement;
        if (this._currentPower < 0)
            this._currentPower = 0;
        //console.log(this._powerIncrement, this._currentPower)
    };
    Object.defineProperty(Booster.prototype, "powerIncrement", {
        get: function () {
            return this._powerIncrement;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Booster.prototype, "maxPower", {
        get: function () {
            return this._maxPower;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Booster.prototype, "currentPower", {
        get: function () {
            return this._currentPower;
        },
        enumerable: false,
        configurable: true
    });
    return Booster;
}());
var BoosterSystem = /** @class */ (function () {
    function BoosterSystem(boostersMaxPower) {
        var _this = this;
        this.boosters = [];
        boostersMaxPower.forEach(function (maxPower) { return _this.boosters.push(new Booster(maxPower)); });
    }
    BoosterSystem.prototype.speedUp = function () {
        this.boosters.forEach(function (booster) { return booster.speedUp(); });
    };
    BoosterSystem.prototype.slowDown = function () {
        this.boosters.forEach(function (booster) { return booster.slowDown(); });
    };
    BoosterSystem.prototype.currentPower = function () {
        return (this.boosters.reduce(function (total, booster) { return total + booster.currentPower; }, 0).toLocaleString());
    };
    BoosterSystem.prototype.maxPower = function () {
        return (this.boosters.reduce(function (total, booster) { return total + booster.maxPower; }, 0).toLocaleString());
    };
    BoosterSystem.prototype.toString = function () {
        return this.boosters.map(function (booster) { return booster.maxPower; }).toLocaleString();
    };
    return BoosterSystem;
}());
var Rocket = /** @class */ (function () {
    function Rocket(id, boostersMaxPower) {
        this.id = id;
        this.boosterSystem = new BoosterSystem(boostersMaxPower);
    }
    Rocket.prototype.toString = function () {
        return this.id + ": " + this.boosterSystem.toString();
    };
    Rocket.prototype.speedUp = function () {
        this.boosterSystem.speedUp();
    };
    Rocket.prototype.slowDown = function () {
        this.boosterSystem.slowDown();
    };
    Object.defineProperty(Rocket.prototype, "idCode", {
        get: function () {
            return this.id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rocket.prototype, "boostersMaxPower", {
        get: function () {
            return this.boosterSystem.toString();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rocket.prototype, "boosters", {
        get: function () {
            return this.boosterSystem.toString();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rocket.prototype, "currentPower", {
        get: function () {
            return this.boosterSystem.currentPower();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rocket.prototype, "maxPower", {
        get: function () {
            return this.boosterSystem.maxPower();
        },
        enumerable: false,
        configurable: true
    });
    return Rocket;
}());
