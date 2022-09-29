import './extensions/array_extensions'
import { HighestAverage } from './highest_average'
import { HuntingtonHillDivisor } from './divisors/huntington_hill_divisor'

export class HuntingtonHill extends HighestAverage {
  constructor () {
    super((new HuntingtonHillDivisor))
  }
}
