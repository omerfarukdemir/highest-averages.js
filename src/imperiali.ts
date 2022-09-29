import './extensions/array_extensions'
import { HighestAverage } from './highest_average'
import { ImperialiDivisor } from './divisors/imperiali_divisor'

export class Imperiali extends HighestAverage {
  constructor () {
    super((new ImperialiDivisor))
  }
}
