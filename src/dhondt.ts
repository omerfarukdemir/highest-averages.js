import './extensions/array_extensions'
import { HighestAverage } from './highest_average'
import { DHondtDivisor } from './divisors/dhondt_divisor'

export class DHondt extends HighestAverage {
  constructor () {
    super((new DHondtDivisor))
  }
}
