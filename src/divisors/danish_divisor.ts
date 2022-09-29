import { Divisor } from './divisor'

export class DanishDivisor implements Divisor {
  next = (iteration: number): number => iteration + 1 / 3
}
