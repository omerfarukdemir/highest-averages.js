import './extensions/array_extensions'
import { HighestAverage } from './highest_average'
import { SainteLagueDivisor } from './divisors/sainte_lague_divisor'

export class SainteLague extends HighestAverage {
  constructor () {
    super((new SainteLagueDivisor))
  }
}
