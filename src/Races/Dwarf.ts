import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints: number;
  static count = 0;

  constructor(n: string, d: number) {
    super(n, d);
    this._maxLifePoints = 80;
    Dwarf.count += 1; 
  }

  get maxLifePoints(): number { return this._maxLifePoints; }

  static createdRacesInstances(): number { 
    return Dwarf.count;
  }
}