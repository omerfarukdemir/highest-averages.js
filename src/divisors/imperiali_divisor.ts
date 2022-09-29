import { Divisor } from './divisor'

export class ImperialiDivisor implements Divisor {
  next = (iteration: number): number => iteration + 2
}
