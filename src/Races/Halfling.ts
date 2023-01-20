import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints: number;
  static count = 0;

  constructor(n: string, d: number) {
    super(n, d);
    this._maxLifePoints = 60;
    Halfling.count += 1; 
  }

  get maxLifePoints(): number { return this._maxLifePoints; }

  static createdRacesInstances(): number { 
    return Halfling.count;
  }
}