import { Divisor } from './divisor'

export class SainteLagueDivisor implements Divisor {
  next = (iteration: number): number => iteration + 0.5
}
