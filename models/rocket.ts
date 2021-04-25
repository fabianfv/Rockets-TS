class Booster {
  
  private _currentPower = 0

  constructor(
    private _maxPower: number,
    private _powerIncrement: number = 10
  ) {}
  
  speedUp(): void {
    this._currentPower += this._powerIncrement
    if (this._currentPower > this._maxPower)
      this._currentPower = this._maxPower
    //console.log(this._powerIncrement, this._currentPower)
  }

  slowDown(): void {
    this._currentPower -= this._powerIncrement
    if (this._currentPower < 0)
      this._currentPower = 0
    //console.log(this._powerIncrement, this._currentPower)
  }

  get powerIncrement(): number {
    return this._powerIncrement
  }

  get maxPower(): number {
    return this._maxPower
  }

  get currentPower(): number {
    return this._currentPower
  }
}

class BoosterSystem {
  private boosters: Booster[] = []

  constructor(boostersMaxPower: number[]) {
    boostersMaxPower.forEach(
      maxPower => this.boosters.push(
        new Booster(maxPower)
      )
    )  
  }

  speedUp(): void {
    this.boosters.forEach(
      booster => booster.speedUp()
    )
  }

  slowDown(): void {
    this.boosters.forEach(
      booster => booster.slowDown()
    )
  }

  currentPower(): string {
    return (
      this.boosters.reduce(
        (total, booster) => total + booster.currentPower,
        0
        ).toLocaleString()
    )
  }

  maxPower(): string {
    return (
      this.boosters.reduce(
       (total, booster) => total + booster.maxPower,
        0
      ).toLocaleString()
    )
  }

  toString(): string {
    return this.boosters.map(booster => booster.maxPower).toLocaleString()
  }
}

class Rocket {

  private boosterSystem: BoosterSystem

  constructor(
    private id: string,
    boostersMaxPower: number[]
  ) {
    this.boosterSystem = new BoosterSystem(boostersMaxPower)
  }

  toString(): string {
    return `${this.id}: ${this.boosterSystem.toString()}`
  }

  speedUp(): void {
    this.boosterSystem.speedUp()
  }
  
  slowDown(): void {
    this.boosterSystem.slowDown()
  }

  get idCode(): string {
    return this.id
  }

  get boostersMaxPower(): string {
    return this.boosterSystem.toString()
  }

  get boosters(): string {
    return this.boosterSystem.toString()
  }

  get currentPower(): string {
    return this.boosterSystem.currentPower()
  }

  get maxPower(): string {
    return this.boosterSystem.maxPower()
  }

} 