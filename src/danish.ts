import './extensions/array_extensions'
import { HighestAverage } from './highest_average'
import { DanishDivisor } from './divisors/danish_divisor'

export class Danish extends HighestAverage {
  constructor () {
    super((new DanishDivisor))
  }
}
