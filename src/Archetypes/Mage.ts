import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private _energyType: EnergyType;
  static count = 0;

  constructor(n: string) {
    super(n);
    this._energyType = 'mana';
    Mage.count += 1;
  }

  get energyType(): EnergyType { return this._energyType; }
  static createdArchetypeInstances(): number { return Mage.count; }
}